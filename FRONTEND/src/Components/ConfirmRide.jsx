import React from "react";

const ConfirmRide = (props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold py-1">Confirm Ride</h2>
        <h4
          className="text-xl"
          onClick={() => {
            props.setVehiclePanel(true), props.setConfirmRidePanel(false);
          }}
        >
          <i className="ri-arrow-left-line"></i>
        </h4>
      </div>
      <div className="flex justify-between items-center flex-col">
        <img
          className="h-30 ml-5 mb-2"
          src="https://th.bing.com/th/id/OIP.90_IXyFPb47LZ_AYAe1ylAHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7"
          alt=""
        />
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
              <i className="ri-map-pin-user-fill"></i>
            </h4>
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <h5 className="text-sm -mt-1 text-gray-700"></h5>
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
        <button onClick={()=>{ props.setLookingForDriverPanel(true) , props.setConfirmRidePanel(false)}} className=" mt-5 w-full px-4 py-2 text-white font-semibold bg-green-500  rounded-lg">
          Confirm
        </button>
      </div>
    </>
  );
};

export default ConfirmRide;