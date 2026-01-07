// src/components/Navbar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex flex-row justify-between items-center px-10 py-4 sticky top-0 z-50">
      
      {/* 1. Left Side: App Name */}
      <div className="text-2xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition-all cursor-pointer">
        AI PASTE
      </div>

      {/* 2. Right Side: Navigation Links */}
      <div className="flex flex-row gap-8">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            isActive 
            ? "text-cyan-400 font-bold text-lg border-b-2 border-cyan-400 pb-1 font-orbitron shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
            : "text-gray-300 font-medium text-lg hover:text-cyan-200 transition-colors font-orbitron"
          }
        >
          HOME
        </NavLink>

        <NavLink 
          to="/pastes"
          className={({ isActive }) => 
            isActive 
            ? "text-cyan-400 font-bold text-lg border-b-2 border-cyan-400 pb-1 font-orbitron shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
            : "text-gray-300 font-medium text-lg hover:text-cyan-200 transition-colors font-orbitron"
          }
        >
          ARCHIVES
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar