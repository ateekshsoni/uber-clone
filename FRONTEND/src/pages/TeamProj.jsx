import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen w-full bg-[url(https://www.bypeople.com/wp-content/uploads/2015/07/low-poly-online-background-generator.jpg)] bg-no-repeat bg-cover">
        <div className=" flex justify-center items-center p-10 ">
          <div className="flex flex-col">
            <h4 className="text-red-600 text-xl font-medium text-left">TEAM</h4>
            <h2 className="font-semibold text-6xl">
              MEET OUR <span className="text-yellow-400">TEAM</span>
            </h2>
          </div>
        </div>
        <div className="h-[60%] m-auto w-[70%]  flex items-center justify-between  ">
            <div className="flex flex-col w-[25%] h-[80%]  justify-end p-2 relative">
                <div className="h-[50%] w-[70%] bg-[url(https://i.pinimg.com/736x/cb/49/d7/cb49d7a218bc4848dfd2300fbaa7dd05.jpg)] bg-cover absolute flex items-center justify-center top-0 right-9 shadow-lg shadow-cyan-600 rounded-t-full rounded-e-full">
                </div>
                <div className=" bg-[#ffffff6f] rounded-t-[88%] rounded-b-lg w-full h-[60%] border-black p-5">
                    <h4 className="text-2xl font-semibold mt-7">Sawan Singh </h4>
                    <h5 className="text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae perspiciatis quia unde animi asperiores magni.</h5>
                </div>
            </div>
            <div className="flex flex-col w-[25%] h-[80%]  justify-end p-2 relative">
                <div className="h-[50%] w-[70%] bg-[url(https://i.pinimg.com/736x/ec/0e/f1/ec0ef171d9c4606b76c4a6217461409a.jpg)] bg-cover absolute flex items-center justify-center top-0 right-9 shadow-lg shadow-cyan-600 rounded-t-full rounded-e-full">
                </div>
                <div className=" bg-[#ffffff6f] rounded-t-[88%] rounded-b-lg w-full h-[60%] border-black p-5">
                    <h4 className="text-2xl font-semibold mt-7">Atiksh Soni</h4>
                    <h5 className="text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae perspiciatis quia unde animi asperiores magni.</h5>
                </div>
            </div>
            <div className="flex flex-col w-[25%] h-[80%]  justify-end p-2 relative">
                <div className="h-[50%] w-[70%] bg-[url(https://i.pinimg.com/736x/7d/fb/f4/7dfbf43d2b25b0579ca595d8646cd35c.jpg)] bg-cover absolute flex items-center justify-center top-0 right-9 shadow-lg shadow-cyan-600 rounded-t-full rounded-e-full">
                </div>
                <div className=" bg-[#ffffff6f] rounded-t-[88%] rounded-b-lg w-full h-[60%] border-black p-5">
                    <h4 className="text-2xl font-semibold mt-7">Amit Saw</h4>
                    <h5 className="text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae perspiciatis quia unde animi asperiores magni.</h5>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default page;
