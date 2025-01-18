import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div>
      <div className='h-screen bg-no-repeat bg-cover bg-center  bg-[url(https://th.bing.com/th/id/R.dc07ede95fc71ab97f70ad8d0c9ba600?rik=gQc1moErrmMheg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f8%2f87%2fTraffic_lights.jpg&ehk=%2bwSu0AyTw7i0jhIAHYSsBt4ieZbwxjkmwNWtmdhkTmE%3d&risl=&pid=ImgRaw&r=0)] pt-5  w-full flex justify-between flex-col bg-blue-400'>
        <img src="https://logospng.org/download/uber/logo-uber-4096.png" alt="uber-logo" className='w-10 ml-6'/>
        <div className='bg-white py-4 pb-7 px-4'>
          <h2 className='text-2xl font-bold'>Get Started With UBER</h2>
          <Link to={'login'} className='w-full flex items-center justify-center bg-black text-white rounded mt-5  py-2'>Continue</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Start
