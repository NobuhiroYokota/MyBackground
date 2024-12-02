'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('Login functionality not implemented yet')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Link href="/" className="absolute top-4 left-4 z-10">
        <Button variant="outline" className="text-sm px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out">
          ← Back
        </Button>
      </Link>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <main className="text-center z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Button type="submit" className="text-white w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            Login <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </main>
    </div>
  )
}

export default Login