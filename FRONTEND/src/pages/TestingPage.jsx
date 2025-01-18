import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
const TestingPage = () => {
    const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const panelRef = useRef(null);
  const closePanelIcon = useRef(null);
  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: openPanel ? "70%" : "0%",
    });
  }, [openPanel]);
  return (
    <div>
      <div className="h-screen relative overflow-hidden">
        <img
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt=""
          className="w-16 absolute top-5 left-5"
        />
        <div className="h-screen">
          {/* img for temporary use  */}
          <img
            className=" h-full object-cover "
            src="https://www.destinationsdetoursdreams.com/wp-content/uploads/2021/07/tripvia-sample-map-189x300.jpg"
            alt=""
          />
        </div>
        <div className=" w-full h-screen flex flex-col justify-end absolute bottom-0">
          <div className="h-[30%] p-5 bg-white">
            <div className="flex justify-between">
              <h4 className="text-2xl font-semibold">Find A Trip</h4>
              <h5
                className="text-xl font-semibold "
                onClick={() => setOpenPanel(!openPanel)}
              >
                <i ref={closePanelIcon} className="ri-arrow-down-wide-fill"></i>
              </h5>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-[#eeeeee] rounded-lg  px-5 py-2 mt-5"
                onClick={() => {
                  setOpenPanel(true);
                }}
                type="text"
                placeholder="Add a pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
              <input
                className="w-full bg-[#eeeeee] rounded-lg  px-5 py-2 mt-3"
                type="text"
                onClick={() => {
                  setOpenPanel(true);
                }}
                placeholder="Enter your destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </form>
          </div>
          <div ref={panelRef} className="h-[0%] bg-white ">
            <LocationSearchPanel />
          </div>
        </div>
        <div className="fixed bg-white z-10 bottom-0 p-5">
          <div className="flex items-center justify-between">
            <img className="h-20" src="https://th.bing.com/th/id/OIP.90_IXyFPb47LZ_AYAe1ylAHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            <div>
              <h4>UberGo <span><i className="ri-user-line"></i>4</span> </h4>
              <h5>2 minutes away</h5>
              <p>Affordble,combact rides</p>
            </div>
            <h2>₹193.2</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestingPage