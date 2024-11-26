import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <main className="text-center z-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">MybackGround</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          あなたの個性を反映したバーチャル背景を作成。<br />
          ユニークな空間で、オンライン体験を豊かに。
        </p>
        <div className="space-x-4">
          <Button asChild className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href="/signup">Create Account <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button variant="outline" asChild className="text-lg px-6 py-3 rounded-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 transition-all duration-300 ease-in-out">
            <Link href="/logIn">Login</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

