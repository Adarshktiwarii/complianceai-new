'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Calendar, AlertCircle, Users, CheckSquare } from 'lucide-react'
import Link from 'next/link'

export default function NewComplianceTaskPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'GST',
    dueDate: '',
    priority: 'MEDIUM',
    assignedTo: '',
    recurring: false,
    frequency: 'Monthly',
    reminderDays: '7',
    attachments: [],
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('/api/compliance/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          status: 'PENDING',
        })
      })
      
      if (res.ok) {
        router.push('/dashboard/compliance')
      }
    } catch (error) {
      console.error('Failed to create task:', error)
      router.push('/dashboard/compliance')
    }
  }

  const categories = [
    'GST',
    'Income Tax',
    'Company Law',
    'Labor Law',
    'State Compliance',
    'Environmental',
    'Import/Export',
    'Other'
  ]

  const suggestedTasks = [
    { title: 'GST Return Filing', category: 'GST', frequency: 'Monthly' },
    { title: 'TDS Payment', category: 'Income Tax', frequency: 'Quarterly' },
    { title: 'PF Return', category: 'Labor Law', frequency: 'Monthly' },
    { title: 'Board Meeting', category: 'Company Law', frequency: 'Quarterly' },
    { title: 'Professional Tax', category: 'State Compliance', frequency: 'Monthly' },
  ]

  const handleTemplateSelect = (template: any) => {
    setFormData({
      ...formData,
      title: template.title,
      category: template.category,
      frequency: template.frequency,
      recurring: true
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/compliance">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Add Compliance Task</h1>
            <p className="text-gray-600">Create a new compliance task or reminder</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Task Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., GST Return Filing - March 2024"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="w-full h-24 px-3 py-2 rounded-md border"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Add detailed description of the compliance task..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full h-10 px-3 rounded-md border"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="dueDate">Due Date *</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <select
                    id="priority"
                    className="w-full h-10 px-3 rounded-md border"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  >
                    <option value="CRITICAL">Critical</option>
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="assignedTo">Assign To</Label>
                  <Input
                    id="assignedTo"
                    placeholder="Enter name or email"
                    value={formData.assignedTo}
                    onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <textarea
                  id="notes"
                  className="w-full h-24 px-3 py-2 rounded-md border"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Add any additional notes or instructions..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Templates</CardTitle>
              <CardDescription>Use a template to quickly create tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedTasks.map((template, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleTemplateSelect(template)}
                  className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium">{template.title}</div>
                  <div className="text-sm text-gray-600">
                    {template.category} • {template.frequency}
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recurring Task</CardTitle>
              <CardDescription>Set up recurring compliance tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={formData.recurring}
                  onChange={(e) => setFormData({ ...formData, recurring: e.target.checked })}
                />
                <Label htmlFor="recurring">This is a recurring task</Label>
              </div>

              {formData.recurring && (
                <div>
                  <Label htmlFor="frequency">Frequency</Label>
                  <select
                    id="frequency"
                    className="w-full h-10 px-3 rounded-md border"
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Annually">Annually</option>
                  </select>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reminders</CardTitle>
              <CardDescription>Set up automatic reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="reminderDays">Remind before (days)</Label>
                <Input
                  id="reminderDays"
                  type="number"
                  value={formData.reminderDays}
                  onChange={(e) => setFormData({ ...formData, reminderDays: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-3">
            <Link href="/dashboard/compliance" className="flex-1">
              <Button variant="outline" className="w-full">Cancel</Button>
            </Link>
            <Button type="submit" className="flex-1">Create Task</Button>
          </div>
        </div>
      </form>
    </div>
  )
}