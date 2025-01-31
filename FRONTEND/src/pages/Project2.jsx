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
          <div className="sectionOne min-h-screen">
            <section className="min-h-screen flex flex-col p-2">
              <h2 className="text-5xl font-semibold pt-7  text-center">
                Elevate your experience <br /> with Phone Store
              </h2>
              <p className="text-gray-600 text-center pt-4">
                Quickly seach of repair options and book appointments <br />{" "}
                with certified repair centers.
              </p>
              <div>
                <div className="flex items-center justify-between w-[60%] m-auto">
                  <div className="h-14 w-14 rounded-full bg-pink-300 flex items-center justify-center">
                    <i className=" text-3xl font-bold text-pink-600 ri-smartphone-line"></i>
                  </div>
                  <div className="p-5 flex items-center justify-center gap-4 mt-5">
                    <input
                      type="text"
                      className="border px-2 py-1 active:outline-none"
                      placeholder="Search your device"
                    />
                    <button>Explore</button>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-yellow-300 flex items-center justify-center">
                    <i className=" text-3xl font-bold text-yellow-600 ri-camera-line"></i>
                  </div>
                </div>
                <div className="flex mt-10 items-center justify-between m-auto w-[45%]">
                  <div className="h-14 w-14 rounded-full bg-red-300 flex items-center justify-center">
                    <i className=" text-3xl font-bold text-red-600  ri-volume-up-line"></i>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-blue-300 flex items-center justify-center">
                    <i className="text-3xl font-bold text-blue-600  ri-cpu-line"></i>
                  </div>
                </div>
                <div className="flex items-center mt-10 justify-between m-auto w-[20%]">
                  <div className="h-14 w-14 rounded-full bg-green-300 flex items-center justify-center">
                    <i className=" text-3xl font-bold text-green-600 ri-battery-line"></i>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-sky-300 flex items-center justify-center">
                    <i className=" text-3xl font-bold text-sky-600  ri-drop-line"></i>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-2 -mt-48 h-[70vh]">
              <div className="flex items-center justify-around h-full w-full ">
                <div className="w-[25%] h-[50%] flex items-center justify-around border border-gray-500">
                  <img src="https://file.aiquickdraw.com/m/1738044996_4ac048607ea8483f9d05e8bb049479f6.png" className="h-40" alt="" />
                  <div className="w-1/2 p-2">
                    <h3 className="font-bold text-xl py-2">Quick Phone Repair</h3>
                    <p className="text-sm text-gray-600">Fast ,  professional repairs by certified experts for all issues.</p>
                  </div>
                </div>
                <div className="w-[30%] -mt-16 h-[50%] flex items-center justify-around border border-gray-500">
                  <div className="w-1/2 p-2">
                    <h3 className="font-bold text-xl py-2">Comprihansive Solutions </h3>
                    <p className="text-sm text-gray-600">Expert fixes for screens, batteries, water damage and more.</p>
                  </div>
                  <img src="https://file.aiquickdraw.com/m/1738225029_cc8c7dc46f7243bab38deefab83046bb.png" className="h-40" alt="" />
                </div>
                <div className="w-[25%] h-[50%] flex items-center justify-around border border-gray-500">
                  <img src="https://file.aiquickdraw.com/m/1738225199_89cdabac015a47bf9954ddfbf29f44f0.png" className="h-40" alt="" />
                  <div className="w-1/2 p-2">
                    <h3 className="font-bold text-xl py-2">Easy Booking</h3>
                    <p className="text-sm text-gray-600">simple online booking with real time repair updates and tracking.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full ">
              <div className="w-full h-[60%]">
                <div className="w-1/3 h-[80%] ">
                  <button>
                    Why choose us
                  </button>
                  <h2>The reasons why we rank the best</h2>
                  <p>At Phone Store, we pride ourselves on devlivering exceptional service through certified professionals, top-quality a fast, reliable, and tranparent repair process, making us the go-to  choice for hassle-free phone repairs. From easy booking to comprehensive repair solutions, we strive to you the best experience every time.</p>
                </div>
                <div className="w-1/3 h-[80%]">
                  <div className="w-full h-[40%] flex items-center justify-center bg-blue-600">
                    <img src="https://file.aiquickdraw.com/m/1738231897_c95b5b60502b41fab69bffca1e0b15d6.png" className="h-60" alt="" />
                  </div>
                </div>
                <div></div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Project2;