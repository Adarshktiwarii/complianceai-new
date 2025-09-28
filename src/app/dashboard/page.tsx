'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  FileText,
  CheckSquare,
  AlertCircle,
  TrendingUp,
  Clock,
  Users,
  Calendar,
  BarChart3,
  ArrowRight,
  Plus,
  Bot
} from 'lucide-react'

export default function DashboardPage() {
  const [user, setUser] = useState({ name: 'Rajesh' })
  const [stats, setStats] = useState({
    totalDocuments: 156,
    pendingTasks: 12,
    completedTasks: 89,
    complianceScore: 92
  })

  const upcomingTasks = [
    { id: 1, title: 'GST Return Filing', dueDate: '2025-01-10', priority: 'high' },
    { id: 2, title: 'TDS Payment Q3', dueDate: '2025-01-07', priority: 'critical' },
    { id: 3, title: 'PF Return', dueDate: '2025-01-15', priority: 'medium' },
    { id: 4, title: 'Professional Tax', dueDate: '2025-01-07', priority: 'high' },
  ]

  const recentDocuments = [
    { id: 1, title: 'Employment Agreement - John Doe', status: 'signed', date: '2024-12-28' },
    { id: 2, title: 'Service Agreement - ABC Corp', status: 'draft', date: '2024-12-27' },
    { id: 3, title: 'NDA - XYZ Ltd', status: 'review', date: '2024-12-26' },
  ]

  const quickActions = [
    { title: 'Generate Document', icon: FileText, color: 'bg-blue-500', link: '/dashboard/documents/new' },
    { title: 'Add Task', icon: Plus, color: 'bg-green-500', link: '/dashboard/compliance/new' },
    { title: 'AI Assistant', icon: Bot, color: 'bg-purple-500', link: '/dashboard/ai-assistant' },
    { title: 'View Reports', icon: BarChart3, color: 'bg-orange-500', link: '/dashboard/reports' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name || 'User'}! 👋</h1>
        <p className="text-white/90">
          Your compliance score is {stats.complianceScore}% - Great job keeping up with deadlines!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDocuments}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingTasks}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">3 due this week</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckSquare className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedTasks}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.complianceScore}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all"
                style={{ width: `${stats.complianceScore}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.link}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium">{action.title}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Compliance Tasks</CardTitle>
              <Link href="/dashboard/compliance">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-8 rounded-full ${
                      task.priority === 'critical' ? 'bg-red-500' :
                      task.priority === 'high' ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <Link href={`/dashboard/compliance/${task.id}`}>
                    <Button variant="outline" size="sm">View</Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Documents</CardTitle>
              <Link href="/dashboard/documents">
                <Button variant="ghost" size="sm">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">{doc.title}</p>
                      <p className="text-sm text-gray-600">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs ${
                          doc.status === 'signed' ? 'bg-green-100 text-green-600' :
                          doc.status === 'draft' ? 'bg-gray-100 text-gray-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {doc.status}
                        </span>
                        <span className="ml-2">{new Date(doc.date).toLocaleDateString()}</span>
                      </p>
                    </div>
                  </div>
                  <Link href={`/dashboard/documents/${doc.id}`}>
                    <Button variant="outline" size="sm">Open</Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}