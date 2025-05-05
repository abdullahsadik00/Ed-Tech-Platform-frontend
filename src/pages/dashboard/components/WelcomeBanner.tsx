import React from 'react'

const WelcomeBanner:React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="opacity-90">You have 3 new notifications and 2 upcoming assignments</p>
        </div>
        <button className="mt-4 md:mt-0 bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
          View Notifications
        </button>
      </div>
    </div>
  )
}

export default WelcomeBanner