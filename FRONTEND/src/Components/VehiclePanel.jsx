import React from 'react'

const VehiclePanel = (props) => {
  return (
    <>
       <h2 className="text-xl font-semibold py-1">Choose Vehicle</h2>
          <h5
            className=" text-xl absolute  right-2 top-6"
            onClick={() => {
              props.setOpenPanel(false), props.setVehiclePanel(false);
            }}
          >
            <i className="ri-close-line"></i>
          </h5>
          <div className="flex w-full mb-2 p-3 border-2  active:border-black rounded-xl items-center justify-between">
            <img
              className="h-16"
              src="https://th.bing.com/th/id/OIP.90_IXyFPb47LZ_AYAe1ylAHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                UberGo{" "}
                <span>
                  <i className="ri-user-line"></i>4
                </span>{" "}
              </h4>
              <h5 className="font-medium text-xs">2 minutes away</h5>
              <p className="font-normal text-gray-500 text-xs">
                Affordble,combact rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹193.2</h2>
          </div>
          <div className="flex w-full mb-2 p-3 border-2  active:border-black rounded-xl items-center justify-between">
            <img
              className="h-16"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt=""
            />
            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  <i className="ri-user-line"></i>1
                </span>{" "}
              </h4>
              <h5 className="font-medium text-xs">4 minutes away</h5>
              <p className="font-normal text-gray-500 text-xs">
                Affordble,Motercycle ride
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹65.25</h2>
          </div>
          <div className="flex w-full mb-2 p-3 border-2 active:border-black rounded-xl items-center justify-between">
            <img
              className="h-16"
              src="https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                Uber Auto{" "}
                <span>
                  <i className="ri-user-line"></i>3
                </span>{" "}
              </h4>
              <h5 className="font-medium text-xs">3 minutes away</h5>
              <p className="font-normal text-gray-500 text-xs">
                Affordble,Auto ride
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹116.45</h2>
          </div>  
    </>
  )
}

export default VehiclePanel
