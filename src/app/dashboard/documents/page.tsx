'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2,
  Copy,
  CheckCircle,
  Clock,
  AlertCircle 
} from 'lucide-react'
import Link from 'next/link'

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<any[]>([])
  const [filteredDocuments, setFilteredDocuments] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDocuments()
  }, [])

  useEffect(() => {
    filterDocuments()
  }, [searchTerm, selectedCategory, selectedStatus, documents])

  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('/api/documents', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      const data = await res.json()
      setDocuments(data.documents || [])
      setFilteredDocuments(data.documents || [])
    } catch (error) {
      console.error('Failed to fetch documents:', error)
      // Use dummy data if API fails
      const dummyDocuments = [
        {
          id: '1',
          title: 'Employment Agreement - Rahul Sharma',
          type: 'CONTRACT',
          category: 'HR',
          status: 'SIGNED',
          createdAt: '2024-01-15',
          user: { name: 'Priya Patel' },
          aiGenerated: true
        },
        {
          id: '2',
          title: 'Service Agreement - TechVendor Solutions',
          type: 'AGREEMENT',
          category: 'Business',
          status: 'DRAFT',
          createdAt: '2024-01-14',
          user: { name: 'Amit Kumar' },
          aiGenerated: false
        },
        {
          id: '3',
          title: 'NDA - ABC Corporation',
          type: 'AGREEMENT',
          category: 'Legal',
          status: 'REVIEW',
          createdAt: '2024-01-13',
          user: { name: 'Priya Patel' },
          aiGenerated: true
        },
        {
          id: '4',
          title: 'Board Resolution - Q4 2023',
          type: 'RESOLUTION',
          category: 'Corporate',
          status: 'SIGNED',
          createdAt: '2024-01-12',
          user: { name: 'Rajesh Singh' },
          aiGenerated: false
        },
        {
          id: '5',
          title: 'Termination Letter - Contract Employee',
          type: 'NOTICE',
          category: 'HR',
          status: 'DRAFT',
          createdAt: '2024-01-11',
          user: { name: 'HR Department' },
          aiGenerated: true
        }
      ]
      setDocuments(dummyDocuments)
      setFilteredDocuments(dummyDocuments)
    } finally {
      setLoading(false)
    }
  }

  const filterDocuments = () => {
    let filtered = documents

    if (searchTerm) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(doc => doc.category === selectedCategory)
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(doc => doc.status === selectedStatus)
    }

    setFilteredDocuments(filtered)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      try {
        const token = localStorage.getItem('token')
        await fetch(`/api/documents/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        })
        setDocuments(documents.filter(doc => doc.id !== id))
      } catch (error) {
        console.error('Failed to delete document:', error)
      }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'SIGNED':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'DRAFT':
        return <Clock className="w-4 h-4 text-gray-500" />
      case 'REVIEW':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SIGNED':
        return 'bg-green-100 text-green-800'
      case 'DRAFT':
        return 'bg-gray-100 text-gray-800'
      case 'REVIEW':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const categories = ['all', 'HR', 'Legal', 'Business', 'Corporate', 'Compliance']
  const statuses = ['all', 'DRAFT', 'REVIEW', 'SIGNED']

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-gray-600">Manage and generate legal documents</p>
        </div>
        <div className="flex space-x-3">
          <Link href="/dashboard/documents/templates">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Templates
            </Button>
          </Link>
          <Link href="/dashboard/documents/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Document
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Signed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {documents.filter(d => d.status === 'SIGNED').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">In Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {documents.filter(d => d.status === 'REVIEW').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">AI Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {documents.filter(d => d.aiGenerated).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search documents..."
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
                  {status === 'all' ? 'All Status' : status}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>
            {filteredDocuments.length} document(s) found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading documents...</div>
          ) : filteredDocuments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No documents found. Create your first document!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-3 px-2">Document</th>
                    <th className="text-left py-3 px-2">Category</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Created By</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDocuments.map((doc) => (
                    <tr key={doc.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <div>
                            <div className="font-medium">{doc.title}</div>
                            <div className="text-sm text-gray-500 flex items-center space-x-1">
                              <span>{doc.type}</span>
                              {doc.aiGenerated && (
                                <span className="bg-blue-100 text-blue-600 text-xs px-1 rounded">AI</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-sm">{doc.category}</span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(doc.status)}
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(doc.status)}`}>
                            {doc.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-sm">{doc.user?.name || 'Unknown'}</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-sm">
                          {new Date(doc.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-1">
                          <Link href={`/dashboard/documents/${doc.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(doc.id)}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
