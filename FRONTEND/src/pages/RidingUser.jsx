import React from "react";
import { Link } from "react-router-dom";
const RidingUser = (props) => {
  return (
    <>
      <div className="h-screen ">
        <Link to={'/home'} className="fixed h-8 w-8 bg-white right-2 top-2 rounded-full flex justify-center items-center">
        <i className="text-lg font-medium  ri-home-5-line"></i>
        </Link>
        <div className="h-1/2">
          <img
            className="w-full h-full"
            src="https://www.destinationsdetoursdreams.com/wp-content/uploads/2021/07/tripvia-sample-map-189x300.jpg"
            alt=""
          />
        </div>
        <div className="h-1/2">
          <div className="flex justify-between items-center"></div>
          <div className="flex justify-between items-center flex-col p-2">
            <div className="flex items-center justify-between w-full">
              <img
                className="h-20  mb-2"
                src="https://th.bing.com/th/id/OIP.adk9u6mGADidbtKxakvnRgHaE7?rs=1&pid=ImgDetMain"
                alt=""
              />
              <div className="text-right leading-tight">
                <h2 className="text-base font-semibold -mb-2">Amit Saw</h2>
                <h3 className="text-base font-semibold -mb-2">BMW M5</h3>
                <h4 className="text-lg font-semibold ">MP04 AB 3737</h4>
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
                  <i className="ri-cash-line"></i>
                </h4>
                <div>
                  <h3 className="text-lg font-medium ">₹193.20</h3>
                  <h5 className="text-sm -mt-1 text-gray-700">Cash Cash</h5>
                </div>
              </div>
              <button className=" mt-5 w-full px-4 py-2 text-white font-semibold bg-green-500  rounded-lg">
          Make Payment
        </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RidingUser;