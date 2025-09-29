'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  FileText,
  Calendar,
  Users,
  BarChart3,
  Download,
  RefreshCw
} from 'lucide-react'

export default function LegalHealthPage() {
  const [scanning, setScanning] = useState(false)
  
  const healthMetrics = {
    overall: 85,
    categories: [
      { name: 'Corporate Compliance', score: 92, status: 'excellent' },
      { name: 'Tax Compliance', score: 88, status: 'good' },
      { name: 'Labor Law', score: 75, status: 'needs-attention' },
      { name: 'Intellectual Property', score: 95, status: 'excellent' },
      { name: 'Data Protection', score: 82, status: 'good' },
      { name: 'Contract Management', score: 78, status: 'needs-attention' },
    ]
  }

  const recommendations = [
    {
      priority: 'high',
      title: 'Update Employment Contracts',
      description: 'New labor law amendments require updated terms',
      impact: 'Legal Risk Reduction',
      effort: '2 hours'
    },
    {
      priority: 'medium',
      title: 'Implement Data Retention Policy',
      description: 'GDPR compliance for customer data',
      impact: 'Compliance Score +5%',
      effort: '1 hour'
    },
    {
      priority: 'low',
      title: 'Review Vendor Agreements',
      description: 'Annual review of standard terms',
      impact: 'Risk Mitigation',
      effort: '3 hours'
    }
  ]

  const handleScan = () => {
    setScanning(true)
    setTimeout(() => setScanning(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Legal Health Dashboard
          </h1>
          <p className="text-gray-600">AI-powered analysis of your compliance status</p>
        </div>
        <Button 
          onClick={handleScan}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          disabled={scanning}
        >
          {scanning ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <RefreshCw className="w-4 h-4 mr-2" />
              Run Full Scan
            </>
          )}
        </Button>
      </div>

      {/* Overall Score */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Your Legal Health Score
              </h2>
              <p className="text-gray-600 mt-2">
                Based on 150+ compliance parameters
              </p>
            </div>
            <div className="relative">
              <div className="w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={351.86}
                    strokeDashoffset={351.86 * (1 - healthMetrics.overall / 100)}
                    className="text-green-500 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{healthMetrics.overall}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthMetrics.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
                  {category.status === 'excellent' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {category.status === 'good' && <TrendingUp className="w-5 h-5 text-blue-500" />}
                  {category.status === 'needs-attention' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold">{category.score}%</div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    category.status === 'excellent' ? 'bg-green-100 text-green-700' :
                    category.status === 'good' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {category.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      category.status === 'excellent' ? 'bg-green-500' :
                      category.status === 'good' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${category.score}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
          <CardDescription>Prioritized actions to improve your legal health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-2 h-full rounded-full ${
                  rec.priority === 'high' ? 'bg-red-500' :
                  rec.priority === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{rec.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                      rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {rec.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                    <span>Impact: {rec.impact}</span>
                    <span>Effort: {rec.effort}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">Take Action</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Report */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Generate Compliance Report</h3>
              <p className="text-sm text-gray-600 mt-1">
                Get a detailed PDF report of your legal health status
              </p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
