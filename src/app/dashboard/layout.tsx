'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  User,
  Bot,
  ChevronDown,
  Building,
  HelpCircle,
  Sparkles
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'GST Return due in 3 days', type: 'warning' },
    { id: 2, message: 'Document signed by client', type: 'success' },
  ])

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }
    
    // Set user data (would normally fetch from API)
    setUser({
      name: 'Rajesh Kumar',
      email: 'admin@techsolutions.com',
      company: 'Tech Solutions Pvt Ltd',
      role: 'Admin'
    })
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Documents', href: '/dashboard/documents', icon: FileText },
    { name: 'Compliance', href: '/dashboard/compliance', icon: CheckSquare },
    { name: 'AI Assistant', href: '/dashboard/ai-assistant', icon: Bot },
    { name: 'Reports', href: '/dashboard/reports', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">ComplianceAI</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
                {item.name === 'AI Assistant' && (
                  <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-gray-500">{user?.company || 'Company'}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-200 ${sidebarOpen ? 'lg:pl-64' : ''}`}>
        {/* Top Header */}
        <header className="bg-white border-b sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
                
                {/* Search */}
                <div className="ml-4 flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search documents, tasks..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="w-5 h-5" />
                    {notifications.length > 0 && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                    )}
                  </Button>
                </div>

                {/* Help */}
                <Button variant="ghost" size="sm">
                  <HelpCircle className="w-5 h-5" />
                </Button>

                {/* User Menu */}
                <div className="relative">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>

                {/* Logout */}
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}