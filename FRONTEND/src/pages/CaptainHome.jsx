import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../Components/CaptainDetail";
import RidePopUp from "../Components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";
const CaptainHome = () => {

  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);
  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUpPanel]);

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
        <div className="h-2/3">
          <img
            className="w-full h-full"
            src="https://www.destinationsdetoursdreams.com/wp-content/uploads/2021/07/tripvia-sample-map-189x300.jpg"
            alt=""
          />
        </div>
        <div className="h-1/3 p-4">
         <CaptainDetail  />
        </div>
        <div
          className="fixed w-full  bg-white  z-10  bottom-0 px-3 py-6"
          ref={ridePopUpPanelRef}
        >
         <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
        </div>
        <div
          className="fixed w-full  bg-white h-screen  z-10  bottom-0 px-3 py-6"
          ref={confirmRidePopUpPanelRef}
        >
         <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
        </div>
      </div>
    </>
  );
};

export default CaptainHome;