import React from "react";
import { Link } from "react-router-dom";
const CaptainHome = () => {
  return (
    <>
      <div className="h-screen ">
        <div className="flex justify-between items-center p-2 top-0 fixed w-full">
          <img
            className="w-14"
            src="https://logospng.org/download/uber/logo-uber-4096.png"
            alt=""
          />
          <Link
            to={"/home"}
            className=" h-8 w-8 bg-white  rounded-full flex justify-center items-center"
          >
            <i className="text-lg font-medium  ri-logout-circle-r-line"></i>
          </Link>
        </div>
        <div className="h-1/2">
          <img
            className="w-full h-full"
            src="https://www.destinationsdetoursdreams.com/wp-content/uploads/2021/07/tripvia-sample-map-189x300.jpg"
            alt=""
          />
        </div>
        <div className="h-1/2 p-4">
          <div >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start  gap-5">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://cdn2.vectorstock.com/i/1000x1000/95/61/male-avatar-profile-picture-icon-simple-style-vector-12459561.jpg"
                  alt=""
                />
                <h4 className="text-lg font-medium">Amit Saw</h4>
              </div>
              <div>
                <h4 className=" text-xl font-semibold">₹591</h4>
                <p className="text-sm  text-gray-600">Earned</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="text-center">
                <i className="text-2xl font-thin ri-time-fill"></i>
                <h5 className="text-lg font-medium">10.2</h5>
                <p className="text-sm text-gray-600 ">Hours Online</p>
              </div>
              <div className="text-center">
                <i className="text-2xl font-thin ri-speed-up-line"></i>
                <h5 className="text-lg font-medium">10.2</h5>
                <p className="text-sm text-gray-600 ">Hours Online</p>
              </div>
              <div className="text-center">
                <i className="text-2xl font-thin ri-booklet-line"></i>
                <h5 className="text-lg font-medium">10.2</h5>
                <p className="text-sm text-gray-600 ">Hours Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptainHome;
