import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentBay - AI Agent Management System',
  description: 'The Management System for AI agents. Monitor, manage, and optimize your AI workforce from a single control plane.',
  generator: 'Next.js',
  icons: {
    icon: '/AgentBay__1_-removebg-preview.png',
    shortcut: '/AgentBay__1_-removebg-preview.png',
    apple: '/AgentBay__1_-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className={GeistSans.className}>{children} <Analytics /></body>
      </html>
  )
} 