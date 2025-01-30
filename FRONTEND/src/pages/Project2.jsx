import React from "react";

const Project2 = () => {
  return (
    <>
      <div className="min-h-screen w-full ">
        <header className="h-16 w-full px-2 py-1">
          <nav className="flex items-center justify-between">
            <img
              className="h-12"
              src="https://clipground.com/images/sample-company-logo-png-2.png"
              alt=""
            />
            <ul className="flex items-center justify-center gap-3 text-gray-500 ">
              <li>Features</li>
              <li>About</li>
              <li>Resources</li>
              <li>Why PhoneStore</li>
            </ul>
            <button className="px-4 py-1 text-gray-600 text-sm border">
              Login
            </button>
          </nav>
        </header>
        <main>
          <div className="sectionOne ">
            <section className="min-h-screen  flex flex-col p-2">
              <h2 className="text-5xl font-semibold pt-7  text-center">
                Elevate your experience <br /> with Phone Store
              </h2>
              <p className="text-gray-600 text-center pt-4">
                Quickly seach of repair options and book appointments <br />{" "}
                with certified repair centers.
              </p>
              <div>
                <div className="flex items-center justify-between w-[60%] m-auto">
                  <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className=" text-2xl ri-smartphone-line"></i>
                  </div>
                  <div className="p-5 mt-5">
                    <input type="text" placeholder="Search your device" />
                    <button>Explore</button>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className=" text-2xl ri-camera-line"></i>
                  </div>
                </div>
                <div className="flex mt-10 items-center justify-between m-auto w-[45%]">
                  <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className=" text-2xl ri-volume-up-line"></i>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className=" text-2xl ri-cpu-line"></i>
                  </div>
                </div>
                <div className="flex items-center mt-10 justify-between m-auto w-[20%]">
                  <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className=" text-2xl ri-battery-line"></i>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center">
                    <i className=" text-2xl ri-drop-line"></i>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Project2;
