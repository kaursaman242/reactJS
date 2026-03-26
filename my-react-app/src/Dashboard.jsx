import React from 'react'

const Dashboard = () => {
  return (
    <div className='border m-4 border-black rounded-2xl p-8 h-screen flex space-x-4 '>
      <div className='border border-gray-400 shadow-2xs w-50 p-6 rounded-2xl '>
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

      <div className='flex space-x-50'>
        <h2 className='text-xl'>Dashboard</h2> 

        <input type="text" placeholder='search' className='border rounded-lg p-3 h-8 w-[50%] ' />
      </div>

        <div className="w-80 p-5 bg-white shadow-md rounded-xl">
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h3 className="mt-3 font-semibold">Candace Jules</h3>
        <p className="text-sm text-gray-500">Director of Recruiting</p>
      </div>

      <div className="mt-6 space-y-3">
        <div className="bg-orange-400 text-white p-3 rounded-lg">
          Sr. Android Developer
        </div>

        <div className="bg-purple-600 text-white p-3 rounded-lg">
          UX/UI Designer
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
