import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../Components/FinishRide";
const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finsishRidePanelRef = useRef(null)
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finsishRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(finsishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
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
            to={"/captain-logout"}
            className=" h-8 w-8 bg-white  rounded-full flex justify-center items-center"
          >
            <i className="text-lg font-medium  ri-logout-circle-r-line"></i>
          </Link>
        </div>
        <div className="h-4/5">
          <img
            className="w-full h-full"
            src="https://www.destinationsdetoursdreams.com/wp-content/uploads/2021/07/tripvia-sample-map-189x300.jpg"
            alt=""
          />
        </div>
        <div className="h-1/5 p-4 bg-yellow-400 " onClick={()=>{setFinishRidePanel(true)}}>
          <h5 className="text-xl font-semibold  text-center">
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">7KM away</h4>
            <button className=" px-4 py-2 text-white font-semibold bg-green-500  rounded-lg">
              Complete Ride
            </button>
          </div>
        </div>
        <div
          className="fixed w-full  bg-white z-10 bottom-0 h-screen px-3 py-6"
          ref={finsishRidePanelRef}
        >
         <FinishRide  setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </>
  );
};

export default CaptainRiding;
