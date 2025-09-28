'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Copy, 
  ThumbsUp, 
  ThumbsDown,
  Paperclip,
  Mic,
  StopCircle,
  RefreshCw,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  suggestions?: string[]
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI Legal Assistant. I can help you with:\n\n• Generating legal documents\n• Understanding compliance requirements\n• Answering legal queries\n• Reviewing contracts\n• Providing compliance checklists\n\nHow can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        'Generate an employment agreement',
        'What are GST compliance requirements?',
        'Review my NDA',
        'Create a board resolution'
      ]
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const aiResponse = generateAIResponse(input)
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase()
    let response = ''
    let suggestions: string[] = []

    if (lowerInput.includes('employment') || lowerInput.includes('agreement')) {
      response = `I'll help you create an employment agreement. Here's what I need to know:

**Employment Agreement Details:**

1. **Employee Information:**
   - Full Name
   - Designation/Position
   - Department
   
2. **Compensation:**
   - Basic Salary
   - Allowances (HRA, Transport, etc.)
   - Bonus Structure
   
3. **Terms:**
   - Start Date
   - Probation Period
   - Notice Period
   - Work Location
   
4. **Benefits:**
   - Health Insurance
   - Provident Fund
   - Paid Leaves
   - Other Perks

Would you like me to generate a standard employment agreement template, or would you prefer to provide specific details?`
      
      suggestions = [
        'Generate standard template',
        'Add specific clauses',
        'Include confidentiality terms',
        'Add non-compete clause'
      ]
    } else if (lowerInput.includes('gst')) {
      response = `Here are the key GST compliance requirements for your business:

**Monthly Compliances:**
- **GSTR-1**: Due by 11th of next month (Outward supplies)
- **GSTR-3B**: Due by 20th of next month (Summary return)

**Quarterly Compliances:**
- **GSTR-2B**: Auto-generated (Input tax credit)
- **CMP-08**: For composition dealers

**Annual Compliances:**
- **GSTR-9**: Annual return (Due by 31st December)
- **GSTR-9C**: Reconciliation statement (if turnover > 5 Cr)

**Key Points:**
- Maintain proper invoices and records
- File returns on time to avoid penalties
- Reconcile ITC regularly
- Update GST registration for any changes

Would you like me to create a GST compliance calendar for your business?`
      
      suggestions = [
        'Create GST calendar',
        'Calculate GST liability',
        'Check filing status',
        'Generate GST invoice'
      ]
    } else if (lowerInput.includes('nda') || lowerInput.includes('non-disclosure')) {
      response = `I can help you create a Non-Disclosure Agreement (NDA). 

**Types of NDAs:**
1. **Unilateral NDA**: One party shares confidential information
2. **Mutual NDA**: Both parties share confidential information

**Key Components:**
- Definition of confidential information
- Obligations of receiving party
- Permitted uses
- Duration of confidentiality
- Exceptions to confidentiality
- Remedies for breach
- Governing law

Would you like me to generate a mutual or unilateral NDA?`
      
      suggestions = [
        'Create mutual NDA',
        'Create unilateral NDA',
        'Add specific clauses',
        'Review existing NDA'
      ]
    } else if (lowerInput.includes('compliance') || lowerInput.includes('checklist')) {
      response = `I'll help you with compliance management. Here are the main compliance areas:

**1. Corporate Compliance:**
- Board meetings (minimum 4 per year)
- Annual General Meeting
- ROC filings
- Statutory audits

**2. Tax Compliance:**
- Income tax returns
- TDS payments and returns
- GST filings
- Professional tax

**3. Labor Law Compliance:**
- PF/ESIC contributions
- Minimum wages
- Shops & establishment registration
- Labor welfare fund

**4. Industry-Specific:**
- Environmental clearances
- Industry licenses
- Quality certifications
- Data protection compliance

Which area would you like to focus on?`
      
      suggestions = [
        'Create compliance calendar',
        'Monthly compliance list',
        'Upcoming deadlines',
        'Penalty calculator'
      ]
    } else {
      response = `I understand you're asking about "${userInput}". Let me help you with that.

Based on your query, I can assist with:
- Drafting relevant legal documents
- Explaining compliance requirements
- Providing legal guidance
- Creating customized templates

Could you please provide more specific details about what you need?`
      
      suggestions = [
        'Generate document',
        'Explain compliance',
        'Legal consultation',
        'Browse templates'
      ]
    }

    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
      suggestions
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  const quickActions = [
    { icon: FileText, label: 'Draft Document', action: 'I need to draft a legal document' },
    { icon: Calendar, label: 'Compliance Calendar', action: 'Show me upcoming compliance deadlines' },
    { icon: AlertCircle, label: 'Legal Query', action: 'I have a legal question' },
    { icon: CheckCircle, label: 'Review Contract', action: 'Review my contract for issues' },
  ]

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6">
      <div>
        <h1 className="text-2xl font-bold">AI Legal Assistant</h1>
        <p className="text-gray-600">Your intelligent compliance and legal document assistant</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setInput(action.action)}
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  {action.label}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>AI Assistant</CardTitle>
                  <CardDescription>Powered by Advanced Legal AI</CardDescription>
                </div>
                <div className="ml-auto flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex space-x-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {message.role === 'user' ? (
                          <User className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                      <div>
                        <div className={`rounded-lg px-4 py-2 ${
                          message.role === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <pre className="whitespace-pre-wrap font-sans text-sm">{message.content}</pre>
                        </div>
                        {message.role === 'assistant' && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Button variant="ghost" size="sm" onClick={() => copyMessage(message.content)}>
                              <Copy className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ThumbsDown className="w-3 h-3" />
                            </Button>
                          </div>
                        )}
                        {message.suggestions && message.suggestions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Input
                  placeholder="Ask me anything about legal compliance..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button variant="ghost" size="sm" onClick={handleVoiceInput}>
                  {isListening ? (
                    <StopCircle className="w-5 h-5 text-red-500" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </Button>
                <Button onClick={handleSend}>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}