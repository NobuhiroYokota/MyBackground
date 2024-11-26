'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const [isConfirming, setIsConfirming] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else {
        setError('Failed to fetch users')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Error occurred while fetching users')
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })

      if (response.ok) {
        setMessage('User registered successfully')
        setUsername('')
        setEmail('')
        setPassword('')
        fetchUsers()
      } else {
        setMessage('Failed to register user')
      }
    } catch (error) {
      console.error('Error:', error)
      setMessage('Error occurred during registration')
    }
    setIsConfirming(false)
  }

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    setIsConfirming(true)
  }

  const handleCancel = () => {
    setIsConfirming(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <main className="text-center z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Create Account</h1>
        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-left text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
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
            Create Account <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </main>

      {isConfirming && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Confirm Registration</h2>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Username:</span> {username}
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="mb-4 text-gray-700">
              <span className="font-semibold">Password:</span> {password.replace(/./g, '*')}
            </p>
            <div className="space-y-2">
              <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                Confirm Registration
              </Button>
              <Button onClick={handleCancel} variant="outline" className="w-full text-lg px-6 py-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 transition-all duration-300 ease-in-out">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center z-10 bg-white bg-opacity-80 p-6 rounded-2xl shadow-2xl backdrop-blur-sm w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Registered Users</h2>
        {error && <p className="text-red-500">{error}</p>}
        <ul className="space-y-2">
          {users.map((user: { username: string }, index: number) => (
            <li key={index} className="p-2 border border-gray-300 rounded bg-gray-50 text-gray-700">
              <span className="font-semibold">Username:</span> {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Signup