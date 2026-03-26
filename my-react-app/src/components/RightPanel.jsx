import React from 'react'
import { BadgeQuestionMark, Settings, BellDot } from "lucide-react";

const RightPanel = () => {
  return (
     <div className="w-80 bg-white shadow-md rounded-xl">
      <div className='flex gap-6 mb-8 ml-60 pt-4 text-right text-gray-400'>
          <BadgeQuestionMark />
          <Settings/>
          {/* <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-8 h-8 rounded-full "
        /> */}
      </div>
     
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h3 className="mt-3 font-semibold">Candace Jules</h3>
        <p className="text-sm text-gray-500">Director of Recruiting</p>
      </div>

      <div className='flex m-6 space-x-30'>
        <div>Jobs Posted</div>
        <div className='bg-purple-600 p-1 rounded-lg  '>+Add</div>

      </div>

      <div className="mt-6 space-y-3 h-full">
        <div className="bg-orange-400 text-white p-3 m-4 rounded-lg">
          Sr. Android Developer
        </div>

        <div className="bg-purple-600 text-white p-3 m-4 rounded-lg">
          UX/UI Designer
        </div>

        <div className='flex m-6 space-x-46'>
          <div>
            Reminders
          </div>
          <div className='text-gray-400'><BellDot /></div>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default RightPanel
