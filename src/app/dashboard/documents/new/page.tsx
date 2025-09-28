'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileText, Wand2, Upload, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function NewDocumentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    type: 'CONTRACT',
    category: 'Business',
    templateId: '',
    useAI: false,
    aiPrompt: '',
    content: '',
  })
  const [generating, setGenerating] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)

  const templates = [
    {
      id: '1',
      name: 'Employment Agreement',
      category: 'HR',
      description: 'Standard employment contract for full-time employees',
      fields: ['Employee Name', 'Designation', 'Salary', 'Start Date']
    },
    {
      id: '2',
      name: 'Service Agreement',
      category: 'Business',
      description: 'Agreement for service providers and vendors',
      fields: ['Vendor Name', 'Services', 'Payment Terms', 'Duration']
    },
    {
      id: '3',
      name: 'Non-Disclosure Agreement',
      category: 'Legal',
      description: 'Mutual NDA for protecting confidential information',
      fields: ['Party A', 'Party B', 'Duration', 'Jurisdiction']
    },
    {
      id: '4',
      name: 'Leave and License Agreement',
      category: 'Legal',
      description: 'Rental agreement for commercial or residential property',
      fields: ['Landlord', 'Tenant', 'Property Address', 'Rent', 'Duration']
    },
    {
      id: '5',
      name: 'Consultancy Agreement',
      category: 'Business',
      description: 'Agreement for consulting services',
      fields: ['Consultant Name', 'Scope of Work', 'Fees', 'Duration']
    }
  ]

  const handleTemplateSelect = (template: any) => {
    setSelectedTemplate(template)
    setFormData({
      ...formData,
      templateId: template.id,
      title: `${template.name} - ${new Date().toLocaleDateString()}`,
      category: template.category,
    })
  }

  const handleAIGenerate = async () => {
    setGenerating(true)
    
    setTimeout(() => {
      const generatedContent = `
# ${formData.title || 'Legal Document'}

This document is generated using AI based on your requirements.

## PARTIES
This agreement is entered into between:
- **First Party**: [Party Name]
- **Second Party**: [Party Name]

## TERMS AND CONDITIONS

### 1. Scope of Work
The parties agree to the following terms and conditions as outlined in this document.

### 2. Duration
This agreement shall be valid from [Start Date] to [End Date].

### 3. Payment Terms
Payment shall be made as per the following schedule:
- Initial Payment: [Amount]
- Monthly Payment: [Amount]
- Final Payment: [Amount]

### 4. Confidentiality
Both parties agree to maintain strict confidentiality regarding all information shared.

### 5. Termination
This agreement may be terminated by either party with [Notice Period] written notice.

### 6. Governing Law
This agreement shall be governed by the laws of India.

## SIGNATURES

_____________________
First Party
Date: ___________

_____________________
Second Party
Date: ___________

---
*This document was generated using ComplianceAI on ${new Date().toLocaleString()}*
      `
      setFormData({ ...formData, content: generatedContent })
      setGenerating(false)
    }, 2000)
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch('/api/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          status: 'DRAFT',
        })
      })
      
      if (res.ok) {
        router.push('/dashboard/documents')
      }
    } catch (error) {
      console.error('Failed to save document:', error)
      router.push('/dashboard/documents')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/documents">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Create New Document</h1>
            <p className="text-gray-600">Generate documents with AI or use templates</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Document Templates</CardTitle>
              <CardDescription>Choose a template to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleTemplateSelect(template)}
                  className={`w-full text-left p-3 rounded-lg border transition-all hover:shadow-md ${
                    selectedTemplate?.id === template.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{template.name}</div>
                  <div className="text-sm text-gray-600">{template.category}</div>
                  <div className="text-xs text-gray-500 mt-1">{template.description}</div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Document Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter document title"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Document Type</Label>
                  <select
                    id="type"
                    className="w-full h-10 px-3 rounded-md border"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="CONTRACT">Contract</option>
                    <option value="AGREEMENT">Agreement</option>
                    <option value="NOTICE">Notice</option>
                    <option value="POLICY">Policy</option>
                    <option value="RESOLUTION">Resolution</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="w-full h-10 px-3 rounded-md border"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="Business">Business</option>
                  <option value="HR">HR</option>
                  <option value="Legal">Legal</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Compliance">Compliance</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>AI Document Generation</span>
              </CardTitle>
              <CardDescription>
                Describe what you need and let AI generate the document
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="aiPrompt">Describe your requirements</Label>
                <textarea
                  id="aiPrompt"
                  className="w-full h-32 px-3 py-2 rounded-md border"
                  placeholder="E.g., I need an employment agreement for a software developer position with 6 months probation period, standard benefits, and work from home option..."
                  value={formData.aiPrompt}
                  onChange={(e) => setFormData({ ...formData, aiPrompt: e.target.value })}
                />
              </div>
              <Button 
                onClick={handleAIGenerate} 
                disabled={generating}
                className="w-full"
              >
                {generating ? (
                  <>Generating with AI...</>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate with AI
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Content</CardTitle>
              <CardDescription>
                Edit the generated content or write your own
              </CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full h-96 px-3 py-2 rounded-md border font-mono text-sm"
                placeholder="Document content will appear here..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-3">
            <Link href="/dashboard/documents">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={handleSave}>
              Save as Draft
            </Button>
            <Button onClick={handleSave} variant="default">
              Save & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
