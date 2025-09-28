'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Download, 
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Activity,
  DollarSign,
  Users,
  PieChart
} from 'lucide-react'

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState('month')
  
  const stats = {
    documentsGenerated: 245,
    tasksCompleted: 189,
    complianceScore: 92,
    timesSaved: '450 hrs',
    costSaved: '₹2.5L',
    accuracy: '98.5%'
  }

  const complianceData = [
    { month: 'January', completed: 45, pending: 12, overdue: 2 },
    { month: 'February', completed: 52, pending: 8, overdue: 1 },
    { month: 'March', completed: 48, pending: 15, overdue: 3 },
    { month: 'April', completed: 58, pending: 10, overdue: 0 },
    { month: 'May', completed: 61, pending: 7, overdue: 1 },
    { month: 'June', completed: 55, pending: 11, overdue: 2 },
  ]

  const categoryBreakdown = [
    { category: 'GST', count: 85, percentage: 30 },
    { category: 'Income Tax', count: 65, percentage: 23 },
    { category: 'Company Law', count: 55, percentage: 19 },
    { category: 'Labor Law', count: 45, percentage: 16 },
    { category: 'Others', count: 35, percentage: 12 },
  ]

  const recentActivity = [
    { action: 'Document Generated', details: 'Employment Agreement - Rahul Kumar', time: '2 hours ago', icon: FileText },
    { action: 'Task Completed', details: 'GST Return Filing - January', time: '5 hours ago', icon: CheckCircle },
    { action: 'Alert', details: 'TDS Payment due in 3 days', time: '1 day ago', icon: AlertCircle },
    { action: 'Document Signed', details: 'NDA - ABC Corporation', time: '2 days ago', icon: FileText },
    { action: 'Task Created', details: 'Annual Board Meeting', time: '3 days ago', icon: Clock },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-600">Track your compliance performance and document metrics</p>
        </div>
        <div className="flex space-x-3">
          <select
            className="px-4 py-2 border rounded-md"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.documentsGenerated}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Tasks Done</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.tasksCompleted}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Compliance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.complianceScore}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${stats.complianceScore}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Time Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.timesSaved}</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cost Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.costSaved}</div>
            <p className="text-xs text-gray-600 mt-1">Estimated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">AI Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.accuracy}</div>
            <p className="text-xs text-gray-600 mt-1">Document quality</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Compliance Trend
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </CardTitle>
            <CardDescription>Monthly compliance task status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceData.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{month.month}</span>
                    <span className="text-gray-500">
                      {month.completed + month.pending + month.overdue} total
                    </span>
                  </div>
                  <div className="flex h-8 rounded overflow-hidden">
                    <div 
                      className="bg-green-500 flex items-center justify-center text-white text-xs"
                      style={{ width: `${(month.completed / (month.completed + month.pending + month.overdue)) * 100}%` }}
                    >
                      {month.completed}
                    </div>
                    <div 
                      className="bg-yellow-500 flex items-center justify-center text-white text-xs"
                      style={{ width: `${(month.pending / (month.completed + month.pending + month.overdue)) * 100}%` }}
                    >
                      {month.pending}
                    </div>
                    <div 
                      className="bg-red-500 flex items-center justify-center text-white text-xs"
                      style={{ width: `${(month.overdue / (month.completed + month.pending + month.overdue)) * 100}%` }}
                    >
                      {month.overdue > 0 && month.overdue}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center space-x-4 mt-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2" />
                  Completed
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded mr-2" />
                  Pending
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded mr-2" />
                  Overdue
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Category Breakdown
              <PieChart className="w-5 h-5 text-gray-400" />
            </CardTitle>
            <CardDescription>Tasks by compliance category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{category.category}</span>
                    <span className="text-gray-500">{category.count} tasks ({category.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Top Category:</strong> GST compliance accounts for 30% of all tasks
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Recommendation:</strong> Consider automating recurring GST filings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Activity
              <Activity className="w-5 h-5 text-gray-400" />
            </CardTitle>
            <CardDescription>Latest compliance activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.action.includes('Alert') ? 'bg-yellow-100' :
                    activity.action.includes('Completed') ? 'bg-green-100' :
                    'bg-blue-100'
                  }`}>
                    <activity.icon className={`w-4 h-4 ${
                      activity.action.includes('Alert') ? 'text-yellow-600' :
                      activity.action.includes('Completed') ? 'text-green-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.details}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              AI Insights & Recommendations
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </CardTitle>
            <CardDescription>Smart suggestions based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Upcoming Deadline Alert</p>
                    <p className="text-xs text-blue-700 mt-1">
                      You have 5 compliance tasks due in the next 7 days. Consider prioritizing GST return filing.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-900">Performance Improvement</p>
                    <p className="text-xs text-green-700 mt-1">
                      Your compliance completion rate improved by 15% this month. Keep up the good work!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <DollarSign className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-900">Cost Optimization</p>
                    <p className="text-xs text-yellow-700 mt-1">
                      Automating document generation has saved approximately ₹45,000 in legal fees this quarter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-purple-900">Team Efficiency</p>
                    <p className="text-xs text-purple-700 mt-1">
                      Consider assigning more tasks to team members with lower workload for better distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}