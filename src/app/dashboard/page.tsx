'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Calendar, AlertCircle, TrendingUp, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    documents: 0,
    pendingTasks: 0,
    overdueTasks: 0,
    activeUsers: 0,
  })
  const [recentDocuments, setRecentDocuments] = useState([])
  const [upcomingTasks, setUpcomingTasks] = useState([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token')
      
      // Fetch documents
      const docsRes = await fetch('/api/documents', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const docsData = await docsRes.json()
      
      // Fetch tasks
      const tasksRes = await fetch('/api/compliance/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const tasksData = await tasksRes.json()
      
      // Update stats
      setStats({
        documents: docsData.documents?.length || 0,
        pendingTasks: tasksData.tasks?.filter((t: any) => t.status === 'PENDING').length || 0,
        overdueTasks: tasksData.tasks?.filter((t: any) => 
          new Date(t.dueDate) < new Date() && t.status !== 'COMPLETED'
        ).length || 0,
        activeUsers: 1,
      })
      
      setRecentDocuments(docsData.documents?.slice(0, 5) || [])
      setUpcomingTasks(tasksData.tasks?.slice(0, 5) || [])
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    }
  }

  const statsCards = [
    {
      title: 'Total Documents',
      value: stats.documents,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Pending Tasks',
      value: stats.pendingTasks,
      icon: Calendar,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Overdue Tasks',
      value: stats.overdueTasks,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your compliance status.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentDocuments.length > 0 ? (
                recentDocuments.map((doc: any) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <div>
                      <p className="font-medium">{doc.title}</p>
                      <p className="text-sm text-gray-600">{doc.type}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      doc.status === 'SIGNED' ? 'bg-green-100 text-green-600' :
                      doc.status === 'DRAFT' ? 'bg-gray-100 text-gray-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No documents yet</p>
              )}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/documents">
                <Button variant="outline" className="w-full">
                  View All Documents
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Compliance Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {upcomingTasks.length > 0 ? (
                upcomingTasks.map((task: any) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-gray-600">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'CRITICAL' ? 'bg-red-100 text-red-600' :
                      task.priority === 'HIGH' ? 'bg-orange-100 text-orange-600' :
                      task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No pending tasks</p>
              )}
            </div>
            <div className="mt-4">
              <Link href="/dashboard/compliance">
                <Button variant="outline" className="w-full">
                  View All Tasks
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/dashboard/documents/new">
              <Button variant="outline" className="w-full h-24 flex flex-col">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-xs">Generate Document</span>
              </Button>
            </Link>
            <Link href="/dashboard/compliance/new">
              <Button variant="outline" className="w-full h-24 flex flex-col">
                <Calendar className="h-6 w-6 mb-2" />
                <span className="text-xs">Add Task</span>
              </Button>
            </Link>
            <Link href="/dashboard/documents/templates">
              <Button variant="outline" className="w-full h-24 flex flex-col">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-xs">Browse Templates</span>
              </Button>
            </Link>
            <Link href="/dashboard/reports">
              <Button variant="outline" className="w-full h-24 flex flex-col">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span className="text-xs">View Reports</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}