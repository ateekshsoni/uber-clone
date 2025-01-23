import React from 'react'

const WaitingForDriver = () => {
  return (
    <>
    <div className="flex justify-between items-center">

    </div>
    <div className="flex justify-between items-center flex-col">
      <div className='flex items-center justify-between w-full'> 
      <img
        className="h-20  mb-2"
        src="https://th.bing.com/th/id/OIP.adk9u6mGADidbtKxakvnRgHaE7?rs=1&pid=ImgDetMain"
        alt=""
      />
      <div className='text-right leading-tight'>
        <h2 className='text-base font-semibold -mb-2'>Amit Saw</h2>
        <h3 className='text-base font-semibold -mb-2'>BMW M5</h3>
        <h4 className='text-lg font-semibold '>MP04 AB 3737</h4>
      </div>
      </div>
      <div className="w-full mt-5">
        <div className="flex gap-5 items-center border-b-2 p-3">
          <h4 className="text-lg">
            <i className="ri-map-pin-fill"></i>
          </h4>
          <div>
            <h3 className="text-lg font-medium ">562/11-A</h3>
            <h5 className="text-sm -mt-1 text-gray-700">
              Kalikondrahali , Bengluru , Karnataka
            </h5>
          </div>
        </div>
        <div className="flex gap-5 items-center border-b-2 p-3">
          <h4 className="text-lg">
            <i className="ri-map-pin-fill"></i>
          </h4>
          <div>
            <h3 className="text-lg font-medium ">562/11-A</h3>
            <h5 className="text-sm -mt-1 text-gray-700">
            </h5>
          </div>
        </div>
        <div className="flex gap-5 items-center border-b-2 p-3">
          <h4 className="text-lg">
            <i className="ri-cash-line"></i>
          </h4>
          <div>
            <h3 className="text-lg font-medium ">₹193.20</h3>
            <h5 className="text-sm -mt-1 text-gray-700">Cash Cash</h5>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default WaitingForDriver
