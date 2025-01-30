import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {

  const [otp, setotp] = useState('')

  const submiHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold py-1">Confirm This Ride!</h2>
        <h4
          className="text-xl"
          onClick={() => {
            props.setRidePopUpPanel(false);
          }}
        >
          <i className="ri-close-fill"></i>
        </h4>
      </div>
      <div className="flex justify-between items-center mt-2 bg-yellow-400 rounded-lg p-2 gap-5">
        <div className="flex items-center gap-1">
          <img
            className="rounded-full object-fill object-center h-12 w-12"
            src="https://wallpapers.com/images/hd/cute-anime-profile-pictures-0lifptfs0jd9fml3.jpg"
            alt=""
          />
          <h2 className="text-xl font-semibold">Amit Saw</h2>
        </div>
        <div>
          <h5 className="text-sm font-semibold">1.8KM</h5>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col">
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
        <form
          onSubmit={(e) => {
            submiHandler(e);
          }}
          className="w-full mt-3"
        >
          <div className="flex items-center justify-center">
            <input
              type="text"
              className=" text-center bg-[#eeeeee] font-mono rounded-lg  px-5 py-2 mt-3"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                setotp(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex items-center justify-center  gap-3">
            <Link
              to={"/captain-riding"}
              className=" mt-5 w-full px-4 py-2 text-center text-white font-semibold bg-green-500  rounded-lg"
            >
              Accept
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
              }}
              className=" mt-5 w-full px-4 py-2 text-white font-semibold bg-red-500  rounded-lg"
            >
              Reject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
