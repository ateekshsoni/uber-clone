import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const panelRef = useRef(null);
  const lookingDriverPanel = useRef(null)
  const vehiclePanelRef = useRef(null);
  const ConfirmRideRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const closePanelIcon = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false)


  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);
  useGSAP(() => {
    if (waitingForDriverPanel) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriverPanel]);
  useGSAP(() => {
    if (lookingForDriverPanel) {
      gsap.to(lookingDriverPanel.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(lookingDriverPanel.current, {
        transform: "translateY(100%)",
      });
    }
  }, [lookingForDriverPanel]);
  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(ConfirmRideRef.current,{
        transform:"translateY(0%)"
      })
    }else{
      gsap.to(ConfirmRideRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmRidePanel])

  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: openPanel ? "70%" : "0%",
    });
  }, [openPanel]);
  return (
    <>
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
            <LocationSearchPanel
              setOpenPanel={setOpenPanel}
              openPanel={openPanel}
              vehiclePanel={vehiclePanel}
              setVehiclePanel={setVehiclePanel}
            />
          </div>
        </div>
        <div
          ref={vehiclePanelRef}
          className="fixed w-full  bg-white  z-10 translate-y-full bottom-0 px-3 py-6"
        >
         <VehiclePanel setConfirmRidePanel={setConfirmRidePanel}  setOpenPanel={setOpenPanel} setVehiclePanel={setVehiclePanel} />
        </div>
        <div
          ref={ConfirmRideRef}
          className="fixed w-full  bg-white  z-10 translate-y-full bottom-0 px-3 py-6"
        >
         <ConfirmRide setLookingForDriverPanel={setLookingForDriverPanel} setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}  /> 
        </div>
        <div
          ref={lookingDriverPanel}
          className="fixed w-full  bg-white  z-10 translate-y-full bottom-0 px-3 py-6"
        >
         <LookingForDriver setVehiclePanel={setVehiclePanel} setLookingForDriverPanel={setLookingForDriverPanel} setConfirmRidePanel={setConfirmRidePanel}  /> 
        </div>
        <div
          ref={waitingForDriverRef}
          className="fixed w-full  bg-white  z-10  bottom-0 px-3 py-6"
        >
         <WaitingForDriver  setWaitingForDriverPanel={setWaitingForDriverPanel} setLookingForDriverPanel={setLookingForDriverPanel} setConfirmRidePanel={setConfirmRidePanel}  /> 
        </div>
      </div>
    </>
  );
};
export default Home;