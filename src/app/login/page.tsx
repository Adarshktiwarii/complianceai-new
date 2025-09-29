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
  AlertCircle,
  FileText,
  Shield,
  Zap,
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
      router.push('/dashboard')
      setLoading(false)
    }, 1000)
  }

  // Animated shapes for right side
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  }

  const rotateAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
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

          {/* Google Sign In */}
          <Button 
            type="button"
            variant="outline" 
            className="w-full relative border-gray-300 hover:bg-gray-50 group"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

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
                    className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
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
                    className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
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
        </motion.div>
      </div>

      {/* Right Side - Animated Visual */}
      <div className="hidden lg:block relative flex-1 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Animated Elements */}
        <div className="relative h-full flex items-center justify-center p-12 overflow-hidden">
          {/* Floating Cards */}
          <div className="relative w-full max-w-lg">
            <motion.div
              {...floatingAnimation}
              className="absolute top-0 left-0 w-64 h-40 bg-white/20 backdrop-blur rounded-2xl p-6 shadow-xl"
            >
              <FileText className="w-8 h-8 text-white mb-3" />
              <h4 className="text-white font-semibold mb-1">Smart Documents</h4>
              <p className="text-white/80 text-sm">AI-powered legal document generation</p>
            </motion.div>

            <motion.div
              {...floatingAnimation}
              transition={{ ...floatingAnimation.animate.transition, delay: 2 }}
              className="absolute top-32 right-0 w-64 h-40 bg-white/20 backdrop-blur rounded-2xl p-6 shadow-xl"
            >
              <Shield className="w-8 h-8 text-white mb-3" />
              <h4 className="text-white font-semibold mb-1">Stay Compliant</h4>
              <p className="text-white/80 text-sm">Never miss a deadline again</p>
            </motion.div>

            <motion.div
              {...floatingAnimation}
              transition={{ ...floatingAnimation.animate.transition, delay: 4 }}
              className="absolute bottom-0 left-12 w-64 h-40 bg-white/20 backdrop-blur rounded-2xl p-6 shadow-xl"
            >
              <Zap className="w-8 h-8 text-white mb-3" />
              <h4 className="text-white font-semibold mb-1">Lightning Fast</h4>
              <p className="text-white/80 text-sm">Generate documents in seconds</p>
            </motion.div>
          </div>

          {/* Background Decorations */}
          <motion.div
            {...rotateAnimation}
            className="absolute top-20 right-20 w-32 h-32 border-4 border-white/20 rounded-full"
          />
          <motion.div
            {...rotateAnimation}
            transition={{ ...rotateAnimation.animate.transition, duration: 15 }}
            className="absolute bottom-20 left-20 w-24 h-24 border-4 border-white/20 rounded-xl"
          />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl" />
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/30 to-transparent">
          <div className="flex justify-around text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm text-white/80">Documents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm text-white/80">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}