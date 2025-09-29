'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  FileText, 
  Bot, 
  Shield, 
  Clock, 
  Users,
  Star,
  Zap,
  Menu,
  X,
  Play,
  MousePointer,
  Layers,
  Target,
  Briefcase,
  Globe,
  Heart,
  ArrowUpRight,
  ChevronRight,
  Command,
  Cpu,
  Database,
  Lock,
  BarChart3,
  GitBranch,
  Share2,
  Palette,
  Award,
  TrendingUp,
  Building,
  MessageSquare
} from 'lucide-react'
import CountUp from 'react-countup'
import { IntegrationLogos } from '@/components/integration-logos'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Animated blob colors - Notion/Figma style
  const blobAnimation = {
    animate: {
      transform: ['translate(0,0)', 'translate(30px,-30px)', 'translate(-30px,20px)', 'translate(0,0)'],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }

  const features = [
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"><Bot className="w-6 h-6 text-white" /></div>,
      title: 'AI That Understands Indian Law',
      description: 'Our AI is specifically trained on Indian legal documents, GST rules, and compliance requirements.',
      color: 'from-purple-50 to-pink-50'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"><FileText className="w-6 h-6 text-white" /></div>,
      title: 'Smart Document Editor',
      description: 'Notion-like editor with AI suggestions, real-time collaboration, and version control.',
      color: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>,
      title: 'Automated Compliance Tracking',
      description: 'Never miss a deadline. We track all your GST, TDS, ROC filings automatically.',
      color: 'from-orange-50 to-red-50'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"><Clock className="w-6 h-6 text-white" /></div>,
      title: 'Save 15+ Hours Every Week',
      description: 'What takes lawyers hours, our AI does in seconds. Focus on growing your business.',
      color: 'from-green-50 to-emerald-50'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div>,
      title: 'Team Collaboration',
      description: 'Work together on documents, share templates, and manage permissions easily.',
      color: 'from-indigo-50 to-purple-50'
    },
    {
      icon: <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center"><Zap className="w-6 h-6 text-white" /></div>,
      title: 'Lightning Fast',
      description: 'Generate complex legal documents in under 30 seconds with 98% accuracy.',
      color: 'from-yellow-50 to-orange-50'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Mehta',
      role: 'Founder, TechStartup',
      content: 'ComplianceAI feels like having a legal team on demand. The UI is so intuitive, my team adopted it instantly.',
      rating: 5,
      avatar: '👩‍💼',
      color: 'bg-gradient-to-br from-purple-400 to-pink-400'
    },
    {
      name: 'Arjun Singh',
      role: 'CFO, ExportCo',
      content: 'The AI suggestions are mind-blowing. It caught compliance issues we hadn\'t even thought about.',
      rating: 5,
      avatar: '👨‍💼',
      color: 'bg-gradient-to-br from-blue-400 to-cyan-400'
    },
    {
      name: 'Neha Patel',
      role: 'Legal Head, FinTech India',
      content: 'Beautiful interface that makes legal work actually enjoyable. Saved us ₹20L in legal fees this year.',
      rating: 5,
      avatar: '👩‍⚖️',
      color: 'bg-gradient-to-br from-green-400 to-emerald-400'
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-48 -left-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={blobAnimation.animate}
        />
        <motion.div 
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            ...blobAnimation.animate,
            transition: { ...blobAnimation.animate.transition, delay: 2 }
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            ...blobAnimation.animate,
            transition: { ...blobAnimation.animate.transition, delay: 4 }
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity -z-10" />
                </div>
                <span className="font-bold text-xl">ComplianceAI</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#features" className="px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                How it Works
              </Link>
              <Link href="#pricing" className="px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                Testimonials
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" className="hover:bg-gray-50">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-black hover:bg-gray-800 text-white rounded-lg">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link href="#features" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Features</Link>
              <Link href="#pricing" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Pricing</Link>
              <Link href="/login" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">Sign In</Link>
              <Link href="/register" className="block">
                <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-lg">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-4 py-1.5 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ Indian businesses</span>
            </motion.div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Legal work that
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                feels like magic
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Generate legal documents, track compliance, and get AI assistance. 
              Built specifically for Indian businesses. As intuitive as Notion, as powerful as having your own legal team.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-xl px-8 group">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-xl px-8 group border-gray-300">
                <Play className="w-4 h-4 mr-2" />
                Watch 2-min Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1.5" />
                No credit card required
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1.5" />
                14-day free trial
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1.5" />
                Cancel anytime
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1.5" />
                GDPR compliant
              </span>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="relative mx-auto max-w-6xl">
              {/* Main App Preview */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8">
                  {/* Fake Browser Bar */}
                  <div className="bg-white rounded-t-lg border border-gray-200 px-4 py-3 flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-600">
                        app.complianceai.com
                      </div>
        </div>
      </div>

                  {/* App Content Preview */}
                  <div className="bg-white rounded-b-lg border-x border-b border-gray-200 p-6">
                    <div className="space-y-4">
                      {/* AI Chat Preview */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700">
                              "I'll help you generate an employment agreement. What's the employee's role and salary?"
                            </p>
                          </div>
                        </div>
      </div>

                      {/* Document Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                          <FileText className="w-6 h-6 text-blue-600 mb-2" />
                          <h4 className="font-medium text-sm">Employment Agreement</h4>
                          <p className="text-xs text-gray-600 mt-1">Generated • Ready to sign</p>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                          <Shield className="w-6 h-6 text-green-600 mb-2" />
                          <h4 className="font-medium text-sm">GST Compliance</h4>
                          <p className="text-xs text-gray-600 mt-1">All filings up to date</p>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
                          <Clock className="w-6 h-6 text-orange-600 mb-2" />
                          <h4 className="font-medium text-sm">TDS Payment Due</h4>
                          <p className="text-xs text-gray-600 mt-1">Due in 5 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-8 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Contract Generated</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-3 border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">Team Collaboration</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need,
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> nothing you don't</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A perfectly crafted set of features for Indian businesses. No bloat, no complexity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get started in minutes
            </h2>
            <p className="text-xl text-gray-600">
              No complex setup. No training required. Just sign up and start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-purple-200">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign up in 30 seconds</h3>
              <p className="text-gray-600">
                No credit card. No complex forms. Just your email and you're in.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tell AI what you need</h3>
              <p className="text-gray-600">
                Describe your requirement in plain English. Our AI understands context.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get perfect documents</h3>
              <p className="text-gray-600">
                Download, edit, share. All your compliance tracking automated.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards with Gradient */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> 10,000+ </span>
              businesses
          </h2>
            <p className="text-xl text-gray-600">
              See why companies love ComplianceAI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Mehta',
                role: 'Legal Head',
                company: 'TechUnicorn',
                content: 'Cut our legal expenses by 70%. The AI understands Indian law better than most junior lawyers. Absolutely game-changing for our startup.',
                rating: 5,
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                gradient: 'from-purple-400 via-pink-400 to-red-400'
              },
              {
                name: 'Arjun Patel',
                role: 'CFO',
                company: 'ExportKing',
                content: 'GST compliance used to be a nightmare. Now it\'s automated. We haven\'t missed a single deadline in 8 months. Worth every rupee.',
                rating: 5,
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
                gradient: 'from-blue-400 via-cyan-400 to-teal-400'
              },
              {
                name: 'Sneha Reddy',
                role: 'Founder',
                company: 'FinFlow',
                content: 'The document generation is incredibly fast and accurate. What impressed me most is how it adapts to recent law changes automatically.',
                rating: 5,
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
                gradient: 'from-green-400 via-emerald-400 to-cyan-400'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
                
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all">
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full p-0.5`}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full rounded-full bg-white"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500 mb-8">TRUSTED BY LEADING INDIAN COMPANIES</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
              {['TCS', 'Wipro', 'Infosys', 'Flipkart', 'Zomato', 'BYJU\'S'].map((company, i) => (
                <span key={i} className="text-2xl font-bold text-gray-400">{company}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Partners Section - With Real Logos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works where you work
            </h2>
            <p className="text-xl text-gray-600">
              Seamlessly integrates with your existing stack
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 rounded-3xl blur-3xl opacity-30" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {[
                { 
                  name: 'Zoho Books', 
                  description: 'Accounting',
                  logo: IntegrationLogos.zoho,
                  bgColor: 'bg-white'
                },
                { 
                  name: 'Tally', 
                  description: 'ERP',
                  logo: IntegrationLogos.tally,
                  bgColor: 'bg-white'
                },
                { 
                  name: 'Google Workspace', 
                  description: 'Productivity',
                  logo: IntegrationLogos.google,
                  bgColor: 'bg-white'
                },
                { 
                  name: 'Slack', 
                  description: 'Communication',
                  logo: IntegrationLogos.slack,
                  bgColor: 'bg-white'
                },
                { 
                  name: 'WhatsApp', 
                  description: 'Messaging',
                  logo: IntegrationLogos.whatsapp,
                  bgColor: 'bg-white'
                },
                { 
                  name: 'Razorpay', 
                  description: 'Payments',
                  logo: IntegrationLogos.razorpay,
                  bgColor: 'bg-white'
                },
              ].map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col items-center justify-center">
                    <div className={`w-full h-16 mb-3 flex items-center justify-center ${integration.bgColor} rounded-lg p-2`}>
                      {integration.logo}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-center">{integration.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{integration.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional integrations row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto"
            >
              {[
                { name: 'Paytm', logo: IntegrationLogos.paytm, color: 'text-blue-500' },
                { name: 'HDFC Bank', logo: IntegrationLogos.hdfc, color: 'text-blue-800' },
                { name: 'ICICI', logo: IntegrationLogos.icici, color: 'text-orange-600' },
                { name: 'QuickBooks', logo: IntegrationLogos.quickbooks, color: 'text-green-600' },
                { name: 'FreshBooks', logo: IntegrationLogos.freshbooks, color: 'text-blue-600' },
                { name: 'Xero', logo: IntegrationLogos.xero, color: 'text-blue-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors cursor-pointer flex flex-col items-center justify-center"
                >
                  <div className="mb-2">
                    {item.logo}
                  </div>
                  <span className={`text-sm font-semibold ${item.color}`}>{item.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-4 py-2 rounded-full text-sm">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-gray-700">Custom API integration available for Enterprise</span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powering Legal Operations at Scale
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                value: 10000, 
                suffix: '+', 
                label: 'Active Companies', 
                icon: Building,
                decimals: 0 
              },
              { 
                value: 1000000, 
                suffix: '+', 
                label: 'Documents Created', 
                icon: FileText,
                decimals: 0 
              },
              { 
                value: 50, 
                suffix: 'L+', 
                label: 'Money Saved', 
                prefix: '₹',
                icon: TrendingUp,
                decimals: 0 
              },
              { 
                value: 99.9, 
                suffix: '%', 
                label: 'Uptime SLA', 
                icon: TrendingUp,
                decimals: 1 
              },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <div className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    decimals={stat.decimals}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance - Modern Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your data is protected by multiple layers of security and compliance certifications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Data Encryption',
                description: 'AES 256-bit encryption at rest and in transit',
                features: ['End-to-end encryption', 'Secure key management', 'TLS 1.3 protocol'],
                icon: Lock,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Compliance Standards',
                description: 'Certified with global security standards',
                features: ['ISO 27001:2013', 'SOC 2 Type II', 'GDPR Compliant'],
                icon: Award,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Infrastructure Security',
                description: 'Enterprise-grade hosting and monitoring',
                features: ['99.9% Uptime SLA', 'DDoS Protection', 'Daily Backups'],
                icon: Shield,
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform" />
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8"
          >
            {[
              { name: 'ISO 27001', verified: true },
              { name: 'GDPR', verified: true },
              { name: 'SOC 2', verified: true },
              { name: 'VAPT', verified: true },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700">{badge.name}</span>
                {badge.verified && <span className="text-xs text-green-600">Verified</span>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for every Indian business
          </h2>
            <p className="text-xl text-gray-600">
              From startups to enterprises, we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Startups',
                description: 'Get all incorporation documents, employment agreements, and compliance tracking from day one.',
                features: ['Company Registration', 'ESOP Agreements', 'Investor Documents'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'SMEs',
                description: 'Streamline your legal operations with automated compliance and document management.',
                features: ['GST Compliance', 'Vendor Agreements', 'HR Documents'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Enterprises',
                description: 'Scale your legal operations with custom workflows and advanced automation.',
                features: ['Custom Workflows', 'Multi-entity Support', 'API Integration'],
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple pricing that scales
            </h2>
            <p className="text-xl text-gray-600">
              Start free. Upgrade when you need. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 text-sm">For small businesses</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹4,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">50 AI document generations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Basic compliance tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">1 team member</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg">
                Start Free Trial
              </Button>
            </motion.div>

            {/* Professional Plan - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-gradient-to-b from-gray-900 to-black text-white rounded-2xl p-8 shadow-xl scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
            </span>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-gray-400 text-sm">For growing teams</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹14,999</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>Unlimited AI generations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>Advanced compliance suite</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>5 team members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>Custom templates</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-lg">
                Start Free Trial
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm">For large organizations</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Unlimited team members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Custom AI training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-700">On-premise option</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed Contact Sales */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center text-white overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-30 translate-y-30" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to transform your legal workflow?
          </h2>
              <p className="text-xl mb-8 text-white/90">
                Join 10,000+ businesses already saving time with ComplianceAI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-8">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact-sales">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 rounded-xl px-8">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Sales
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/70">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold text-xl">ComplianceAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Making legal simple for Indian businesses.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Features</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Templates</Link></li>
                <li><Link href="#" className="hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
                <li><Link href="#" className="hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ComplianceAI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ in India 🇮🇳
            </p>
          </div>
        </div>
      </footer>
      </div>
  )
}