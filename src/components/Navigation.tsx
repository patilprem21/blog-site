'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // You can add theme persistence logic here later
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-charcoal to-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-yellow text-sm font-bold">DS</span>
            </div>
            <span className="text-charcoal dark:text-white text-lg font-bold">
              DataScience<span className="text-yellow">Blog</span>
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-700/50 rounded-xl p-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-charcoal dark:text-white hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-charcoal dark:text-white hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 text-sm font-medium text-charcoal dark:text-white hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-all duration-200"
            >
              Blog
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 px-6 py-4">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 text-sm font-medium text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

