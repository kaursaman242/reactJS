import React from 'react'

const StatCard = ({ title, value, percent, color }) => {
  return (
     <div className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center">
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>

      <div className={`text-${color}-500 font-semibold`}>
        {percent}
      </div>
    </div>
  )
}

export default StatCard
