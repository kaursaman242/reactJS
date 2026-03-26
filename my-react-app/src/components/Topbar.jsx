import React from 'react'
import {Search} from 'lucide-react'

const Topbar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-lg bg-gray-100 outline-none"
        />

        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        
          <Search />
        </button>

    
      </div>
    </div>
  )
}

export default Topbar
