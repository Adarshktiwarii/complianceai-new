'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Sparkles, 
  Mail, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff,
  Chrome,
  Github,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate login
    setTimeout(() => {
      if (email === 'admin@test.com' && password === 'password') {
        localStorage.setItem('token', 'dummy-token')
        router.push('/dashboard')
      } else {
        setError('Invalid email or password')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity -z-10" />
              </div>
              <span className="font-bold text-2xl">ComplianceAI</span>
            </Link>
            
            <h2 className="mt-8 text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-gray-600">
              Sign in to access your legal workspace
            </p>
          </div>

          {/* Quick Login Options */}
          <div className="space-y-3">
            <Button 
              type="button"
              variant="outline" 
              className="w-full relative border-gray-300 hover:bg-gray-50"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>
            
            <Button 
              type="button"
              variant="outline"
              className="w-full relative border-gray-300 hover:bg-gray-50"
            >
              <Github className="w-5 h-5 mr-2" />
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start space-x-2"
              >
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <span className="text-sm text-red-800">{error}</span>
              </motion.div>
            )}

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email address
                </Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Link href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-500">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white rounded-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="font-medium text-purple-600 hover:text-purple-500">
                Sign up for free
              </Link>
            </p>
          </form>

          {/* Demo Credentials */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm font-medium text-gray-700 mb-2">🎯 Demo Credentials</p>
            <p className="text-xs text-gray-600">Email: admin@test.com</p>
            <p className="text-xs text-gray-600">Password: password</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Feature Highlight */}
      <div className="hidden lg:block relative flex-1 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="max-w-lg">
            <h3 className="text-4xl font-bold text-white mb-6">
              Your AI-powered legal companion
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Generate documents in seconds</p>
                  <p className="text-white/70 text-sm">AI creates accurate legal documents instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Never miss a deadline</p>
                  <p className="text-white/70 text-sm">Automated compliance tracking and reminders</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Save lakhs in legal fees</p>
                  <p className="text-white/70 text-sm">Reduce legal costs by up to 80%</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 backdrop-blur rounded-xl">
              <p className="text-white/90 text-sm italic">
                "ComplianceAI has transformed how we handle legal work. What used to take days now takes minutes."
              </p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  👨‍💼
                </div>
                <div className="ml-3">
                  <p className="text-white text-sm font-medium">Rajesh Kumar</p>
                  <p className="text-white/70 text-xs">CEO, TechStart India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>
    </div>
  )
}