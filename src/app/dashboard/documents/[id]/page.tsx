'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  ArrowLeft, 
  Download, 
  Edit, 
  Share2, 
  Printer, 
  CheckCircle,
  Send,
  Copy,
  FileSignature
} from 'lucide-react'
import Link from 'next/link'

export default function DocumentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [document, setDocument] = useState<any>(null)
  const [editing, setEditing] = useState(false)
  const [sending, setSending] = useState(false)
  const [signatories, setSignatories] = useState([
    { name: '', email: '', status: 'PENDING' }
  ])

  useEffect(() => {
    setDocument({
      id: params.id,
      title: 'Employment Agreement - Rahul Sharma',
      type: 'CONTRACT',
      category: 'HR',
      status: 'DRAFT',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15',
      content: `
# EMPLOYMENT AGREEMENT

This Employment Agreement ("Agreement") is entered into on 15th January 2024 between Tech Solutions Pvt Ltd ("Company") and Rahul Sharma ("Employee").

## 1. POSITION AND DUTIES
The Employee shall serve as Senior Software Developer and shall perform duties as assigned by the Company.

## 2. COMPENSATION
The Employee shall receive a salary of ₹15,00,000 per annum, payable monthly.

## 3. BENEFITS
- Health Insurance Coverage
- Provident Fund as per statutory requirements
- 21 days of paid leave per year
- Performance bonus as per company policy

## 4. TERM
This agreement shall commence on 1st February 2024 and continue until terminated by either party.

## 5. PROBATION PERIOD
The Employee shall be on probation for a period of 6 months from the date of joining.

## 6. CONFIDENTIALITY
The Employee agrees to maintain strict confidentiality regarding all proprietary information of the Company.

## 7. TERMINATION
Either party may terminate this agreement with 60 days written notice or payment in lieu thereof.

## 8. GOVERNING LAW
This agreement shall be governed by the laws of India.

## SIGNATURES

_____________________
For Tech Solutions Pvt Ltd
Authorized Signatory
Date: ___________

_____________________
Rahul Sharma
Employee
Date: ___________
      `,
      metadata: {
        createdBy: 'Priya Patel',
        department: 'HR',
        aiGenerated: true,
        version: 1,
        template: 'Employment Agreement'
      }
    })
  }, [params.id])

  const handleSendForSignature = async () => {
    setSending(true)
    setTimeout(() => {
      setSending(false)
      alert('Document sent for signature successfully!')
      setDocument({ ...document, status: 'PENDING_SIGNATURE' })
    }, 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([document?.content || ''], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${document?.title || 'document'}.txt`
    a.click()
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(document?.content || '')
    alert('Document copied to clipboard!')
  }

  const addSignatory = () => {
    setSignatories([...signatories, { name: '', email: '', status: 'PENDING' }])
  }

  const updateSignatory = (index: number, field: string, value: string) => {
    const updated = [...signatories]
    updated[index] = { ...updated[index], [field]: value }
    setSignatories(updated)
  }

  const removeSignatory = (index: number) => {
    setSignatories(signatories.filter((_, i) => i !== index))
  }

  if (!document) {
    return <div>Loading...</div>
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
            <h1 className="text-2xl font-bold">{document.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>{document.type}</span>
              <span>•</span>
              <span>{document.category}</span>
              <span>•</span>
              <span>Created on {new Date(document.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                document.status === 'SIGNED' ? 'bg-green-100 text-green-600' :
                document.status === 'DRAFT' ? 'bg-gray-100 text-gray-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
                {document.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button size="sm" onClick={() => setEditing(!editing)}>
            <Edit className="w-4 h-4 mr-2" />
            {editing ? 'Save' : 'Edit'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              {editing ? (
                <textarea
                  className="w-full h-[600px] px-4 py-3 rounded-md border font-mono text-sm"
                  value={document.content}
                  onChange={(e) => setDocument({ ...document, content: e.target.value })}
                />
              ) : (
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-sans">{document.content}</pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="text-sm text-gray-500">Created by</span>
                <p className="font-medium">{document.metadata?.createdBy}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Department</span>
                <p className="font-medium">{document.metadata?.department}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Template</span>
                <p className="font-medium">{document.metadata?.template}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Version</span>
                <p className="font-medium">v{document.metadata?.version}</p>
              </div>
              {document.metadata?.aiGenerated && (
                <div className="pt-2">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    AI Generated
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>E-Signature</CardTitle>
              <CardDescription>Send document for digital signature</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {signatories.map((signatory, index) => (
                <div key={index} className="space-y-2 p-3 border rounded">
                  <div>
                    <Label>Name</Label>
                    <Input
                      placeholder="Signatory name"
                      value={signatory.name}
                      onChange={(e) => updateSignatory(index, 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="signatory@email.com"
                      value={signatory.email}
                      onChange={(e) => updateSignatory(index, 'email', e.target.value)}
                    />
                  </div>
                  {signatories.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSignatory(index)}
                      className="text-red-500"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={addSignatory}
                className="w-full"
              >
                Add Another Signatory
              </Button>
              <Button
                className="w-full"
                onClick={handleSendForSignature}
                disabled={sending}
              >
                {sending ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send for Signature
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Document created</p>
                    <p className="text-xs text-gray-500">by Priya Patel • Jan 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Edit className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Document edited</p>
                    <p className="text-xs text-gray-500">by You • Just now</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
