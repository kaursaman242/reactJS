import React from 'react'

const Sidebar = () => {
  return (
      <div className=' rounded-2xl h-screen flex '>
      <div className='border bg-white border-white shadow-md w-50 p-6 rounded-2xl '>
        <h2 className='text-xl font-bold mb-8'>Applyf</h2>
        <ul className='space-y-8 text-gray-500'>
            <li className='text-blue-600 '>Dashboard</li>
            <li>Jobs</li>
            <li>schedule</li>
            <li>Documents</li>
            <li>Statistics</li>
            <li>Community</li>
            <li>Messages</li>
            <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
