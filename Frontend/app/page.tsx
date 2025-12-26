"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Code2,
  Blocks,
  Activity,
  TrendingUp,
  Eye,
  Settings,
  Bell,
  Globe,
  ChevronRight,
  Monitor,
  AlertCircle,
  BarChart4,
  Puzzle,
  Lock,
  Gauge,
  Menu,
  X,
  Cloud,
  Database,
  Webhook,
  MessageSquare,
  BookOpen,
  Check,
} from "lucide-react"


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const [currentRole, setCurrentRole] = useState("Manage")
  const roles = ["Manage", "Observe", "Assist", "Analyze", "Optimize"]

  // Integrations tab state
  const [integrationTab, setIntegrationTab] = useState<'nocode' | 'code'>("code")

  // Waitlist modal state
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const noCodeIntegrations = [
    { name: "Zapier" },
    { name: "Make" },
    { name: "n8n" },
    { name: "Relevance AI" },
    { name: "And others..." },
  ]

  const codeIntegrations = [
    { name: "LangChain" },
    { name: "LangGraph" },
    { name: "LlamaIndex" },
    { name: "OpenAI Agents" },
    { name: "Anthropic/Claude Agents" },
    { name: "Azure OpenAI Agents" },
    { name: "CrewAI" },
    { name: "CamelAI" },
    { name: "Custom Agent" },
    { name: "And others..." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => {
        const currentIndex = roles.indexOf(prev)
        return roles[(currentIndex + 1) % roles.length]
      })
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])


  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])


  return (
    <div className="bg-[#0A0A0A] text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:shadow-emerald-400/20 hover:shadow-3xl transition-all duration-300 relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-teal-400/5 to-cyan-400/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex justify-between items-center h-16 px-6 relative z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
              <img 
                src="/AgentBay-removebg-preview.png" 
                alt="AgentBay Logo" 
                className="h-12 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="hidden md:flex items-center space-x-6"
            >
              <a href="#platform" className="text-white hover:text-white/80 text-sm font-light transition-colors">
                Platform
              </a>
              <a href="#integrations" className="text-white hover:text-white/80 text-sm font-light transition-colors">
                Integrations
              </a>
              <a href="#features" className="text-white hover:text-white/80 text-sm font-light transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-white/80 text-sm font-light transition-colors">
                Pricing
              </a>
              <Button onClick={() => window.open("https://deserted-foxglove-b89.notion.site/26826eb9ac0a80e18063fbe596484b2f?pvs=105", "_blank")} className="bg-white text-black hover:bg-white/90 text-sm font-light px-6 py-2 h-9 rounded-lg shadow-lg hover:shadow-white/20 transition-all duration-300">
                Join Now
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl mx-4"
            >
              <div className="p-6 space-y-4">
                <a 
                  href="#platform" 
                  className="block text-white hover:text-white/80 text-sm font-light transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Platform
                </a>
                <a 
                  href="#features" 
                  className="block text-white hover:text-white/80 text-sm font-light transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="block text-white hover:text-white/80 text-sm font-light transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <Button 
                  onClick={() => { window.open("https://deserted-foxglove-b89.notion.site/26826eb9ac0a80e18063fbe596484b2f?pvs=105", "_blank"); setMobileMenuOpen(false); }}
                  className="w-full bg-white text-black hover:bg-white/90 text-sm font-light px-6 py-3 h-10 rounded-lg shadow-lg hover:shadow-white/20 transition-all duration-300 mt-4"
                >
                  Join Now
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-32 px-6 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/[0.02] via-transparent to-yellow-400/[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/[0.03] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Stats Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-32 left-8 lg:left-24 hidden lg:block"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">99.9%</div>
                  <div className="text-xs text-white/60">Agent Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="absolute top-40 right-8 lg:right-24 hidden lg:block"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">1.2s</div>
                  <div className="text-xs text-white/60">Avg Response</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-32 left-8 lg:left-32 hidden lg:block"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-400/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">24/7</div>
                  <div className="text-xs text-white/60">Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-24 right-8 lg:right-32 hidden lg:block"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-400/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">50K+</div>
                  <div className="text-xs text-white/60">Tasks/Day</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Enhanced Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/[0.05] border border-white/[0.12] rounded-full px-6 py-3 mb-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">10X your AI Agent Productivity</span>
              <div className="text-xs bg-emerald-400/20 text-emerald-300 px-2 py-1 rounded-full">Beta</div>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.05] font-sans"
            >
              The{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent font-medium">
                AI Agents
              </span>
              <br />
              Management Platform
            </motion.h1>

            {/* Enhanced Animated Role Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center mb-10"
            >
              <div className="group inline-flex items-center px-8 py-4 bg-black/50 backdrop-blur-md border border-yellow-400/50 rounded-full shadow-2xl hover:bg-black/60 hover:border-yellow-400/60 transition-all duration-500 relative overflow-hidden">
                {/* Enhanced gradient sheen */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-amber-400/15 to-yellow-400/10 opacity-10 group-hover:opacity-25 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-pulse" />
                
                {/* Animated Role Pills */}
                <div className="relative overflow-hidden text-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      initial={{ y: 30, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -30, opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.4, 0.0, 0.2, 1]
                      }}
                      className="block text-2xl md:text-3xl font-light text-white tracking-tight whitespace-nowrap relative z-10"
                    >
                      {currentRole}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-normal tracking-[0.01em]"
            >
              Monitor, manage, and optimize your AI workforce from a single control plane. Built for teams running
              agents at scale with{" "}
              <span className="text-emerald-400 font-medium">real-time intelligence</span>.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button onClick={() => window.open("https://deserted-foxglove-b89.notion.site/26826eb9ac0a80e18063fbe596484b2f?pvs=105", "_blank")} variant="elevated" size="lg" className="font-medium shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                Join Private Beta Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button asChild variant="ghostContrast" size="lg" className="font-medium backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                <a href="https://www.loom.com/share/14eea97a8d9a45fcafe08f931864b98a?sid=2dc7c986-891d-4b71-a976-8fbee09d1bd8" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View demo
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </Button>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 font-sans">
              One platform for all your agents
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              Whether built with code, no-code tools, or third-party services—manage everything from one place.
            </p>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-medium mb-1 font-sans">Agent Control Center</h3>
                  <p className="text-sm text-white/60">Real-time monitoring across 24 active agents</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80">All systems operational</span>
                  </div>
                  <div className="text-sm text-white/60">Last updated: 2s ago</div>
                </div>
              </div>

              {/* Key Metrics Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Active Agents</span>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-light">24</div>
                  <div className="text-xs text-green-400">+2 this week</div>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Success Rate</span>
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-light">99.2%</div>
                  <div className="text-xs text-blue-400">+0.3% vs last month</div>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Avg Response</span>
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-light">1.2s</div>
                  <div className="text-xs text-yellow-400">-0.3s improvement</div>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/60">Tasks Today</span>
                    <Activity className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-light">47.2K</div>
                  <div className="text-xs text-purple-400">Peak: 52K at 2PM</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Agent List with Enhanced Details */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium font-sans">Agent Performance</h4>
                    <div className="flex items-center space-x-2 text-xs text-white/60">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Healthy</span>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3" />
                      <span>Warning</span>
                      <div className="w-2 h-2 bg-red-400 rounded-full ml-3" />
                      <span>Critical</span>
                    </div>
                  </div>

                  {[
                    {
                      name: "Customer Support Agent",
                      type: "Custom Code (Langchain)",
                      status: "Healthy",
                      load: "87%",
                      requests: "2.4K/hr",
                      uptime: "99.9%",
                      lastActive: "2s ago",
                      platform: "Python + OpenAI",
                    },
                    {
                      name: "Lead Qualification Agent",
                      type: "Zapier",
                      status: "Healthy",
                      load: "92%",
                      requests: "1.8K/hr",
                      uptime: "98.7%",
                      lastActive: "5s ago",
                      platform: "Zapier + GPT-4",
                    },
                    {
                      name: "Content Generator Agent",
                      type: "Make.com",
                      status: "Warning",
                      load: "45%",
                      requests: "890/hr",
                      uptime: "97.2%",
                      lastActive: "12m ago",
                      platform: "Make + Claude",
                    },
                    {
                      name: "Data Processing Agent",
                      type: "Custom Code (llamaIndex)",
                      status: "Healthy",
                      load: "78%",
                      requests: "3.1K/hr",
                      uptime: "99.8%",
                      lastActive: "1s ago",
                      platform: "Node.js + Anthropic",
                    },
                    {
                      name: "Email Response Agent",
                      type: "n8n",
                      status: "Healthy",
                      load: "63%",
                      requests: "1.2K/hr",
                      uptime: "99.1%",
                      lastActive: "8s ago",
                      platform: "n8n + GPT-3.5",
                    },
                  ].map((agent, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-4 bg-white/[0.02] border border-white/[0.05] rounded-lg hover:border-white/[0.1] hover:bg-white/[0.03] transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div
                            className={`w-3 h-3 rounded-full mt-1 ${
                              agent.status === "Healthy"
                                ? "bg-green-400"
                                : agent.status === "Warning"
                                  ? "bg-yellow-400"
                                  : "bg-red-400"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-sm">{agent.name}</div>
                              <div className="text-xs text-white/60">{agent.lastActive}</div>
                            </div>
                            <div className="flex items-center space-x-4 text-xs text-white/50 mb-2">
                              <div className="flex items-center">
                                {agent.type.includes("Code") ? (
                                  <Code2 className="w-3 h-3 mr-1" />
                                ) : (
                                  <Blocks className="w-3 h-3 mr-1" />
                                )}
                                {agent.platform}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-xs">
                              <div>
                                <div className="text-white/40">Load</div>
                                <div className="font-medium">{agent.load}</div>
                              </div>
                              <div>
                                <div className="text-white/40">Requests</div>
                                <div className="font-medium">{agent.requests}</div>
                              </div>
                              <div>
                                <div className="text-white/40">Uptime</div>
                                <div className="font-medium">{agent.uptime}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Right Panel */}
                <div className="space-y-4">
                  {/* Recent Alerts */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center font-sans">
                      <Bell className="w-4 h-4 mr-2" />
                      Recent Alerts
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5" />
                        <div className="text-xs">
                          <div className="text-white/80">Content Generator</div>
                          <div className="text-white/50">Response time increased</div>
                          <div className="text-white/40">12m ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5" />
                        <div className="text-xs">
                          <div className="text-white/80">Data Processor</div>
                          <div className="text-white/50">Back to normal</div>
                          <div className="text-white/40">1h ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5" />
                        <div className="text-xs">
                          <div className="text-white/80">System Update</div>
                          <div className="text-white/50">New monitoring features</div>
                          <div className="text-white/40">2h ago</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart Placeholder */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                    <h4 className="font-medium mb-3 font-sans">24h Performance</h4>
                    <div className="h-24 bg-white/[0.02] rounded border border-white/[0.05] flex items-end justify-between p-2">
                      {[40, 65, 45, 80, 60, 90, 75, 85, 70, 95, 80, 88].map((height, i) => (
                        <div key={i} className="bg-green-400/60 rounded-sm w-2" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <div className="text-xs text-white/50 mt-2">Average response time: 1.2s</div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4">
                    <h4 className="font-medium mb-3 font-sans">Quick Actions</h4>
                    <div className="space-y-2">
                      <button className="w-full text-left text-xs p-2 bg-white/[0.02] hover:bg-white/[0.05] rounded border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 font-light">
                        Deploy new agent
                      </button>
                      <button className="w-full text-left text-xs p-2 bg-white/[0.02] hover:bg-white/[0.05] rounded border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 font-light">
                        View detailed analytics
                      </button>
                      <button className="w-full text-left text-xs p-2 bg-white/[0.02] hover:bg-white/[0.05] rounded border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 font-light">
                        Configure alerts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/0.02_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 font-sans">
              Integrations for any stack
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
              Plug in your Agents built with any framework/language or no-code tool.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <button
              aria-pressed={integrationTab === 'code'}
              onClick={() => setIntegrationTab('code')}
              className={`px-4 py-2 rounded-lg text-sm transition-all border ${
                integrationTab === 'code'
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/7 hover:text-white'
              }`}
            >
              Code & APIs
            </button>
            <button
              aria-pressed={integrationTab === 'nocode'}
              onClick={() => setIntegrationTab('nocode')}
              className={`px-4 py-2 rounded-lg text-sm transition-all border ${
                integrationTab === 'nocode'
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/7 hover:text-white'
              }`}
            >
              No‑code tools
            </button>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={integrationTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {(integrationTab === 'nocode' ? noCodeIntegrations : codeIntegrations).map((item, idx) => (
                <div
                  key={item.name + idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-md border text-white/90 ${integrationTab === 'code' ? 'bg-yellow-400/5 border-yellow-400/20' : 'bg-emerald-400/5 border-emerald-400/20'}`}>
                    {integrationTab === 'code' ? <Code2 className="w-4 h-4" /> : <Blocks className="w-4 h-4" />}
                  </div>
                  <span className="text-sm text-white/90">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Request integration */}
          <div className="mt-10 flex justify-center">
            <Button asChild variant="elevated" size="lg" className="font-medium">
              <a href="#contact" className="flex items-center">
                Don't see your tool? Request an integration
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 pb-12 relative overflow-hidden">
        {/* Dynamic background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] via-emerald-500/[0.008] to-yellow-500/[0.015]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,emerald-400/0.03_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,yellow-400/0.02_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 font-sans">
              Built for modern AI operations
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Everything you need to run a reliable, scalable AI workforce—from monitoring to optimization.
            </p>
          </motion.div>

          {/* Hero Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-yellow-400/10 to-amber-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-xl group-hover:border-emerald-400/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 border border-emerald-400/30 flex items-center justify-center">
                        <Monitor className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white font-sans mb-1">
                          Real-time Agent Intelligence
                        </h3>
                        <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-xs text-emerald-300 font-medium">
                          <Activity className="w-3 h-3" />
                          Live Monitoring
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-white/70 leading-relaxed">
                      Watch your entire AI workforce in action. Track performance, health, and efficiency with 
                      <span className="text-emerald-400 font-medium"> millisecond precision</span> across all your agents, 
                      platforms, and integrations.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-lg font-light text-white">99.9%</div>
                        <div className="text-xs text-white/60">Uptime monitoring</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-light text-white">&lt;100ms</div>
                        <div className="text-xs text-white/60">Alert response time</div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Demo */}
                  <div className="relative">
                    <div className="bg-black/20 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                          <span>Live Agent Status</span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-400">Online</span>
                          </div>
                        </div>
                        
                        {[
                          { name: "Sales Agent", load: 87, colors: "from-emerald-400 to-emerald-500" },
                          { name: "Support Agent", load: 100, colors: "from-yellow-400 to-yellow-500" },
                          { name: "Data Processing Agent", load: 45, colors: "from-blue-400 to-blue-500" }
                        ].map((agent, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-white/80">{agent.name}</span>
                              <span className="text-white/60">{agent.load}%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${agent.load}%` }}
                                transition={{ duration: 2, delay: idx * 0.3 }}
                                className={`h-2 rounded-full bg-gradient-to-r ${agent.colors}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Feature Grid with Hierarchy */}
          <div className="space-y-6">
            {/* Row 2: Advanced Analytics + Smart Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.03] via-transparent to-amber-400/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border border-yellow-400/30 flex items-center justify-center">
                        <BarChart4 className="w-7 h-7 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white font-sans mb-1">
                          Advanced Analytics
                        </h3>
                        <div className="inline-flex items-center px-2 py-0.5 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-xs text-yellow-300 font-medium">
                          Core Feature
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        Deep insights with predictive analytics and trend analysis to optimize your AI workforce performance.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                          <span>50+ performance metrics</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                          <span>95% prediction accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.03] via-transparent to-orange-400/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-400/30 flex items-center justify-center">
                        <AlertCircle className="w-7 h-7 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white font-sans mb-1">
                          Smart Alerts
                        </h3>
                        <div className="inline-flex items-center px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 rounded-full text-xs text-amber-300 font-medium">
                          Essential
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        AI-powered notifications that learn from your patterns and prevent issues before they happen.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                          <span>99.7% accuracy rate</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                          <span>Real-time detection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Auto-scaling + Universal Connectors + Enterprise Security */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm hover:border-orange-400/20 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/[0.02] via-transparent to-red-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400/10 to-red-400/10 border border-orange-400/20 flex items-center justify-center">
                        <Gauge className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white font-sans mb-1">
                          Auto-scaling
                        </h3>
                        <div className="inline-flex items-center px-2 py-0.5 bg-orange-400/10 border border-orange-400/20 rounded-full text-xs text-orange-300 font-medium">
                          40% savings
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-white/70 leading-relaxed">
                        Intelligent resource management that automatically scales your agents based on demand.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-400/20 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/[0.02] via-transparent to-teal-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/10 to-teal-400/10 border border-emerald-400/20 flex items-center justify-center">
                        <Puzzle className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white font-sans mb-1">
                          Universal Connectors
                        </h3>
                        <div className="inline-flex items-center px-2 py-0.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-xs text-emerald-300 font-medium">
                          50+ platforms
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-white/70 leading-relaxed">
                        One-click integration with popular platforms and custom APIs.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm hover:border-blue-400/20 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.02] via-transparent to-indigo-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/10 to-indigo-400/10 border border-blue-400/20 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white font-sans mb-1">
                          Enterprise Security
                        </h3>
                        <div className="inline-flex items-center px-2 py-0.5 bg-blue-400/10 border border-blue-400/20 rounded-full text-xs text-blue-300 font-medium">
                          SOC 2
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-white/70 leading-relaxed">
                        Top-tier security with zero-trust architecture and encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>


        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 relative overflow-hidden">
        {/* Enhanced background with depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-yellow-500/[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,yellow-400/0.03_0%,transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 font-sans">
              Scale with confidence
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Start your AI operations journey with Early Access, then upgrade to Enterprise when you need advanced security and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                         {/* Beta Plan */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               viewport={{ once: true }}
               className="group relative"
             >
               <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 via-emerald-400/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
               <Card className="relative rounded-2xl bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-xl overflow-hidden group-hover:border-emerald-400/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                 {/* Animated background gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/[0.03] via-transparent to-emerald-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <CardContent className="p-6 relative z-10">
                   <div className="flex items-center justify-between mb-6">
                     <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 font-medium">
                       Beta • Early Access
                     </div>
                     <div className="text-emerald-400 opacity-70">
                       <Shield className="w-5 h-5" />
                     </div>
                   </div>

                   <div className="mb-6">
                     <h3 className="text-xl font-semibold mb-2 text-white font-sans">Starter</h3>
                     <p className="text-white/60 leading-relaxed text-sm">
                       Get early access to AgentBay while in beta. Help shape the future of AI agent management with your feedback.
                     </p>
                   </div>

                   <div className="mb-6">
                     <div className="flex items-baseline gap-2 mb-1">
                       <span className="text-3xl font-light text-white">Beta</span>
                     </div>
                     <p className="text-emerald-300 text-xs font-medium">Free during beta period</p>
                   </div>

                   <div className="space-y-3 mb-8">
                     {[
                       "Monitor up to 25 agents",
                       "Real-time performance metrics",
                       "Basic alerting & notifications", 
                       "Standard integrations (Zapier, Make)",
                       "Community support",
                       "7-day data retention",
                       "Beta program exclusive access"
                     ].map((feature, idx) => (
                       <div key={idx} className="flex items-center gap-2.5">
                         <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center">
                           <Check className="w-2.5 h-2.5 text-emerald-400" />
                         </div>
                         <span className="text-white/80 text-xs">{feature}</span>
                       </div>
                     ))}
                   </div>

                    <Button 
                      onClick={() => window.open("https://deserted-foxglove-b89.notion.site/26826eb9ac0a80e18063fbe596484b2f?pvs=105", "_blank")}
                      variant="elevated" 
                      size="lg" 
                      className="w-full font-medium text-sm h-11 rounded-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-all duration-300"
                    >
                      Join Private Beta Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                   <p className="text-xs text-white/40 text-center mt-3">
                     Free beta access • Help shape the product
                   </p>
                 </CardContent>
               </Card>
            </motion.div>

                         {/* Enterprise Plan */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="group relative"
             >

               <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/15 via-yellow-400/8 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
               <Card className="relative rounded-2xl bg-[#0A0A0A]/90 border border-yellow-400/30 backdrop-blur-xl overflow-hidden group-hover:border-yellow-400/50 transition-all duration-500 hover:shadow-[0_0_80px_rgba(234,179,8,0.25)]">
                 {/* Animated background gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.05] via-transparent to-amber-400/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <CardContent className="p-6 relative z-10">
                   <div className="flex items-center justify-between mb-6">
                     <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 font-medium">
                       Enterprise
                     </div>
                     <div className="text-yellow-400">
                       <Lock className="w-5 h-5" />
                     </div>
                   </div>

                   <div className="mb-6">
                     <h3 className="text-xl font-semibold mb-2 text-white font-sans">Professional</h3>
                     <p className="text-white/60 leading-relaxed text-sm">
                       Advanced security, compliance, and scale for production AI operations. Custom SLAs and dedicated support.
                     </p>
                   </div>

                   <div className="mb-6">
                     <div className="flex items-baseline gap-2 mb-1">
                       <span className="text-3xl font-light text-white">Custom</span>
                     </div>
                     <p className="text-yellow-300 text-xs font-medium">Tailored to your needs</p>
                   </div>

                   <div className="space-y-3 mb-8">
                     {[
                       "Unlimited agents & team members",
                       "Advanced analytics & reporting",
                       "Custom integrations & API access",
                       "SSO/SAML, RBAC, audit trails",
                       "VPC deployment & data residency",
                       "24/7 dedicated support & SLA",
                       "Custom training & onboarding"
                     ].map((feature, idx) => (
                       <div key={idx} className="flex items-center gap-2.5">
                         <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-400/20 flex items-center justify-center">
                           <Check className="w-2.5 h-2.5 text-yellow-400" />
                         </div>
                         <span className="text-white/80 text-xs">{feature}</span>
                       </div>
                     ))}
                   </div>

                   <Button 
                     variant="ghostContrast" 
                     size="lg" 
                     className="w-full font-medium text-sm h-11 rounded-lg border-yellow-400/30 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all duration-300"
                   >
                     Contact Sales
                     <ChevronRight className="ml-2 w-4 h-4" />
                   </Button>

                   <p className="text-xs text-white/40 text-center mt-3">
                     Custom pricing • Implementation included
                   </p>
                 </CardContent>
               </Card>
            </motion.div>
          </div>

                     {/* Additional pricing info */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
             className="text-center mt-12"
           >
            <p className="text-white/50 text-sm mb-6">
              All plans include core monitoring, real-time alerts, and standard integrations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/30 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Type II Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>99.9% uptime SLA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,emerald-400/0.02_0%,transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 font-sans">Get started in minutes</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              From zero to full AI operations monitoring in three simple steps.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Flowing Connection Path */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-yellow-400/30 to-amber-400/30 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-yellow-400/10 to-amber-400/10 blur-sm rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
              {[
                {
                  step: "01",
                  title: "Connect",
                  time: "< 5 minutes",
                  description: "Choose your integration method: SDK, webhook, or drag-and-drop connector for Zapier, Make, and more.",
                  icon: <Globe className="w-8 h-8" />,
                  color: "emerald",
                  details: ["One-click integrations", "Custom API endpoints", "No code required"]
                },
                {
                  step: "02", 
                  title: "Monitor",
                  time: "Real-time",
                  description: "Instantly see agent performance, response times, success rates, and system health in our unified dashboard.",
                  icon: <Activity className="w-8 h-8" />,
                  color: "yellow",
                  details: ["Live performance metrics", "Custom alert thresholds", "Historical analytics"]
                },
                {
                  step: "03",
                  title: "Optimize",
                  time: "Ongoing",
                  description: "Get actionable insights and automated recommendations to improve agent efficiency and scale operations.",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "amber",
                  details: ["Performance recommendations", "Cost optimization", "Auto-scaling insights"]
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Large Step Circle */}
                  <div className="relative mx-auto w-24 h-24 mb-8">
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-${step.color}-400/20 to-${step.color}-600/20 blur-xl group-hover:blur-2xl transition-all duration-500`} />
                    
                    {/* Main circle */}
                    <div className={`relative w-full h-full rounded-full bg-gradient-to-br from-${step.color}-400/10 to-${step.color}-600/10 border-2 border-${step.color}-400/30 backdrop-blur-sm flex items-center justify-center group-hover:border-${step.color}-400/50 transition-all duration-300 group-hover:scale-105`}>
                      <div className={`text-${step.color}-400 transform group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Step number badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${step.color}-400 text-black text-sm font-bold flex items-center justify-center shadow-lg`}>
                      {step.step.replace('0', '')}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="text-center lg:text-left space-y-4">
                    {/* Title & Time */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-white font-sans group-hover:text-white/90 transition-colors">
                        {step.title}
                      </h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${step.color}-400/10 border border-${step.color}-400/20`}>
                        <span className={`text-xs font-medium text-${step.color}-300`}>
                          {step.time}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-base max-w-sm mx-auto lg:mx-0">
                      {step.description}
                    </p>

                    {/* Feature Points */}
                    <div className="space-y-3 pt-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center lg:justify-start gap-3 text-sm text-white/60">
                          <div className={`w-2 h-2 rounded-full bg-${step.color}-400/80 flex-shrink-0`} />
                          <span className="font-light">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < 2 && (
                    <div className="lg:hidden flex justify-center mt-12 mb-4">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Most teams see value within the first hour</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 px-6 bg-gradient-to-b from-white/[0.005] to-white/[0.02] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,yellow-400/0.02_0%,transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 font-sans">
              Join the AI agent management revolution
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              Be part of the community shaping the future of AI operations. Your feedback drives our roadmap.
            </p>
          </motion.div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "100+", label: "Beta waitlist", sublabel: "and growing" },
              { number: "5K+", label: "Agents monitored", sublabel: "in testing" },
              { number: "99.9%", label: "Uptime target", sublabel: "production ready" },
              { number: "24/7", label: "Community support", sublabel: "always available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Community Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-white/[0.02] border border-white/[0.08] rounded-2xl backdrop-blur-sm">
              <div className="text-white/80 text-lg font-light leading-relaxed mb-4">
                "The future of AI isn't just about building agents—it's about managing them at scale. AgentBay is building the infrastructure for that future."
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white/60" />
                </div>
                <div className="text-white/50 text-sm">
                  Early Access Community
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/[0.12] bg-gradient-to-b from-transparent to-white/[0.01] relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/0.02_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center mb-6 md:mb-0 group">
              <img 
                src="/AgentBay-removebg-preview.png" 
                alt="AgentBay Logo" 
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Links Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
              <a href="#platform" className="text-white/50 hover:text-white/80 text-sm font-light transition-colors duration-300">
                Platform
              </a>
              <a href="#features" className="text-white/50 hover:text-white/80 text-sm font-light transition-colors duration-300">
                Features
              </a>
              <a href="#pricing" className="text-white/50 hover:text-white/80 text-sm font-light transition-colors duration-300">
                Pricing
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white/40 text-sm font-light">
              © 2025 AgentBay. All rights reserved.
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 pt-8 border-t border-white/[0.06]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-xs font-light">
                Built for modern AI operations. Trusted by teams worldwide.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/30 hover:text-white/60 text-xs font-light transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/30 hover:text-white/60 text-xs font-light transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
