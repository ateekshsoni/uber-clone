import React from "react";

const CaptainDetail = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start  gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://static.vecteezy.com/system/resources/previews/009/845/108/original/cartoon-icon-cute-astronaut-sitting-on-the-moon-fantasy-concept-simple-premium-design-free-vector.jpg"
              alt=""
            />
            <h4 className="text-lg font-medium">Amit Saw</h4>
          </div>
          <div>
            <h4 className=" text-xl font-semibold">₹591</h4>
            <p className="text-sm  text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center mt-2 bg-gray-100 rounded-md">
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
    </>
  );
};

export default CaptainDetail;
