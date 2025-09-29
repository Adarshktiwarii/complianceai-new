'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  FileText, 
  Bot, 
  Shield, 
  Clock, 
  TrendingUp,
  Users,
  Star,
  Zap,
  BarChart3,
  Globe,
  Award,
  ChevronRight,
  Menu,
  X,
  Play,
  Building,
  Scale,
  IndianRupee,
  MessageSquare,
  Lock,
  Rocket
} from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Document Generation',
      description: 'Generate legal documents in seconds with our advanced AI trained on Indian law'
    },
    {
      icon: Shield,
      title: 'Compliance Tracking',
      description: 'Never miss a deadline with automated reminders and compliance calendar'
    },
    {
      icon: FileText,
      title: '500+ Legal Templates',
      description: 'Access pre-approved templates for all business needs - contracts, agreements, notices'
    },
    {
      icon: Clock,
      title: 'Save 10+ Hours Weekly',
      description: 'Automate repetitive legal work and focus on growing your business'
    },
    {
      icon: Scale,
      title: 'Indian Law Compliant',
      description: 'All documents comply with latest Indian regulations and legal requirements'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Security',
      description: 'Your data is encrypted and secured with enterprise-level protection'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'CFO, TechStart India',
      content: 'ComplianceAI saved us lakhs in legal fees. We generated all our employment contracts and NDAs in minutes!',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Founder, ExportHub',
      content: 'The GST compliance tracking alone is worth it. Never missed a filing deadline since we started using ComplianceAI.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Legal Head, FinanceFlow',
      content: 'AI-generated documents are surprisingly accurate. It understands Indian legal nuances perfectly.',
      rating: 5,
      image: '👨‍⚖️'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹4,999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '50 Documents/month',
        'Basic templates',
        'Compliance calendar',
        'Email support',
        '1 User'
      ],
      highlighted: false
    },
    {
      name: 'Business',
      price: '₹14,999',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Unlimited Documents',
        'All templates + AI generation',
        'Advanced compliance tracking',
        'Priority support',
        '5 Users',
        'E-signature integration',
        'API access'
      ],
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Custom AI training',
        'Dedicated account manager',
        'SLA guarantee',
        'On-premise deployment',
        'Custom integrations'
      ],
      highlighted: false
    }
  ]

  const stats = [
    { value: '10,000+', label: 'Businesses Trust Us' },
    { value: '1M+', label: 'Documents Generated' },
    { value: '98%', label: 'Accuracy Rate' },
    { value: '4.9/5', label: 'Customer Rating' }
  ]

  const faqs = [
    {
      question: 'Is ComplianceAI suitable for Indian businesses?',
      answer: 'Yes! ComplianceAI is specifically designed for Indian businesses. All our templates and AI models are trained on Indian law, including GST, Company Law, Labor Laws, and more.'
    },
    {
      question: 'How accurate are AI-generated documents?',
      answer: 'Our AI maintains 98% accuracy rate. All generated documents are based on verified legal templates and can be reviewed and edited before finalizing.'
    },
    {
      question: 'Can I customize the templates?',
      answer: 'Absolutely! All templates are fully customizable. You can modify any section, add custom clauses, and save your own templates for future use.'
    },
    {
      question: 'Is my data secure?',
      answer: 'We use bank-grade encryption and security measures. Your data is stored in secure servers with regular backups and never shared with third parties.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">ComplianceAI</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-primary">Features</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary">Pricing</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-primary">Testimonials</Link>
              <Link href="#faq" className="text-gray-700 hover:text-primary">FAQ</Link>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Start Free Trial</Button>
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#features" className="block px-3 py-2 text-gray-700">Features</Link>
              <Link href="#pricing" className="block px-3 py-2 text-gray-700">Pricing</Link>
              <Link href="#testimonials" className="block px-3 py-2 text-gray-700">Testimonials</Link>
              <Link href="/login" className="block px-3 py-2 text-gray-700">Login</Link>
              <Link href="/register" className="block px-3 py-2">
                <Button className="w-full">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Trusted by 10,000+ Indian Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Legal Compliance Made
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Simple with AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate legal documents, track compliance deadlines, and get AI-powered legal assistance - 
              all designed specifically for Indian businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start 14-Day Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <span className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                No Credit Card Required
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                Cancel Anytime
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                GDPR Compliant
              </span>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-white rounded-xl shadow-2xl p-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <FileText className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-semibold">Employment Agreement</h3>
                    <p className="text-sm text-gray-600">Generated in 30 seconds</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <Shield className="w-8 h-8 text-green-500 mb-2" />
                    <h3 className="font-semibold">GST Compliance</h3>
                    <p className="text-sm text-gray-600">Next deadline: 5 days</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <Bot className="w-8 h-8 text-purple-500 mb-2" />
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-sm text-gray-600">24/7 Legal Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Legal Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From document generation to compliance tracking, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How ComplianceAI Works
            </h2>
            <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up & Setup</h3>
              <p className="text-gray-600">Create your account and tell us about your business. Takes less than 2 minutes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose or Generate</h3>
              <p className="text-gray-600">Select from templates or describe your needs to our AI for custom documents.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Download & Track</h3>
              <p className="text-gray-600">Get your documents instantly and let us track all compliance deadlines for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.highlighted ? 'border-primary shadow-xl' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.highlighted ? '' : 'variant-outline'}`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Indian Businesses
            </h2>
            <p className="text-xl text-gray-600">See what our customers have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Legal Compliance?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join 10,000+ businesses saving time and money with ComplianceAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <MessageSquare className="w-5 h-5 mr-2" />
              Talk to Sales
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-xl">ComplianceAI</span>
              </div>
              <p className="text-gray-400">
                Making legal compliance simple for Indian businesses.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">API</Link></li>
                <li><Link href="#" className="hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
                <li><Link href="#" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ComplianceAI. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}