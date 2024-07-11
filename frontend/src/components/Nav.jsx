import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-gray-800 font-bold text-xl">MERN AUTH</div>
        <div className="space-x-2">
          <Link to={"/login"} className="text-blue-600 hover:text-blue-800 font-medium">
            Sign In
          </Link>
          <Link to={"/signup"} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav