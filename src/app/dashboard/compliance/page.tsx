'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  CheckSquare, 
  Plus, 
  Search, 
  Calendar, 
  AlertCircle,
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  Download,
  TrendingUp,
  Users,
  FileText,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

export default function CompliancePage() {
  const [tasks, setTasks] = useState<any[]>([])
  const [filteredTasks, setFilteredTasks] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPriority, setSelectedPriority] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    filterTasks()
  }, [searchTerm, selectedCategory, selectedStatus, selectedPriority, tasks])

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('/api/compliance/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const data = await res.json()
      setTasks(data.tasks || [])
    } catch (error) {
      console.error('Failed to fetch tasks:', error)
      const dummyTasks = [
        {
          id: '1',
          title: 'GST Return Filing - January 2025',
          description: 'File GSTR-3B for January 2025',
          category: 'GST',
          dueDate: '2025-02-20',
          status: 'PENDING',
          priority: 'HIGH',
          assignedTo: 'Priya Patel',
          recurring: true,
          frequency: 'Monthly'
        },
        {
          id: '2',
          title: 'TDS Payment - Q4 FY 2024-25',
          description: 'Quarterly TDS payment and return filing',
          category: 'Income Tax',
          dueDate: '2025-01-31',
          status: 'IN_PROGRESS',
          priority: 'CRITICAL',
          assignedTo: 'Amit Kumar',
          recurring: true,
          frequency: 'Quarterly'
        },
        {
          id: '3',
          title: 'Annual Board Meeting',
          description: 'Conduct annual board meeting and file resolutions',
          category: 'Company Law',
          dueDate: '2025-03-31',
          status: 'PENDING',
          priority: 'MEDIUM',
          assignedTo: 'Rajesh Singh',
          recurring: true,
          frequency: 'Annually'
        },
        {
          id: '4',
          title: 'PF Return Filing',
          description: 'File monthly PF return',
          category: 'Labor Law',
          dueDate: '2025-01-25',
          status: 'COMPLETED',
          priority: 'HIGH',
          assignedTo: 'HR Team',
          recurring: true,
          frequency: 'Monthly'
        },
        {
          id: '5',
          title: 'Professional Tax Payment',
          description: 'Pay professional tax for all employees',
          category: 'State Compliance',
          dueDate: '2025-01-20',
          status: 'OVERDUE',
          priority: 'HIGH',
          assignedTo: 'Finance Team',
          recurring: true,
          frequency: 'Monthly'
        }
      ]
      setTasks(dummyTasks)
      setFilteredTasks(dummyTasks)
    } finally {
      setLoading(false)
    }
  }

  const filterTasks = () => {
    let filtered = tasks

    if (searchTerm) {
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(task => task.category === selectedCategory)
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(task => task.status === selectedStatus)
    }

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(task => task.priority === selectedPriority)
    }

    setFilteredTasks(filtered)
  }

  const handleStatusUpdate = async (taskId: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('token')
      await fetch(`/api/compliance/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      })
      
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      ))
    } catch (error) {
      console.error('Failed to update task:', error)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'IN_PROGRESS':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'PENDING':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case 'OVERDUE':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800'
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800'
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800'
      case 'OVERDUE':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL':
        return 'bg-red-500'
      case 'HIGH':
        return 'bg-orange-500'
      case 'MEDIUM':
        return 'bg-yellow-500'
      case 'LOW':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const categories = ['all', 'GST', 'Income Tax', 'Company Law', 'Labor Law', 'State Compliance']
  const statuses = ['all', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'OVERDUE']
  const priorities = ['all', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW']

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'COMPLETED').length,
    pending: tasks.filter(t => t.status === 'PENDING').length,
    overdue: tasks.filter(t => t.status === 'OVERDUE').length,
    dueThisWeek: tasks.filter(t => {
      const days = getDaysUntilDue(t.dueDate)
      return days >= 0 && days <= 7
    }).length
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Compliance Management</h1>
          <p className="text-gray-600">Track and manage all your compliance tasks</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Calendar View
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Link href="/dashboard/compliance/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.overdue}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Due This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.dueThisWeek}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              className="px-4 py-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-md"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status.replace('_', ' ')}
                </option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-md"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              {priorities.map(priority => (
                <option key={priority} value={priority}>
                  {priority === 'all' ? 'All Priorities' : priority}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Tasks</CardTitle>
          <CardDescription>
            {filteredTasks.length} task(s) found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading tasks...</div>
          ) : filteredTasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No tasks found. Create your first compliance task!
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => {
                const daysUntilDue = getDaysUntilDue(task.dueDate)
                return (
                  <div
                    key={task.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-1 h-16 rounded-full ${getPriorityColor(task.priority)}`} />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{task.title}</h3>
                            {task.recurring && (
                              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                                {task.frequency}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                              {daysUntilDue >= 0 ? (
                                <span className="text-xs text-gray-500">({daysUntilDue} days)</span>
                              ) : (
                                <span className="text-xs text-red-500">({Math.abs(daysUntilDue)} days overdue)</span>
                              )}
                            </span>
                            <span className="flex items-center space-x-1">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span>{task.assignedTo}</span>
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                              {task.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(task.status)}
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(task.status)}`}>
                            {task.status.replace('_', ' ')}
                          </span>
                        </div>
                        <select
                          className="text-sm border rounded px-2 py-1"
                          value={task.status}
                          onChange={(e) => handleStatusUpdate(task.id, e.target.value)}
                        >
                          <option value="PENDING">Pending</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="COMPLETED">Completed</option>
                          <option value="OVERDUE">Overdue</option>
                        </select>
                        <Link href={`/dashboard/compliance/${task.id}`}>
                          <Button variant="outline" size="sm">View</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}