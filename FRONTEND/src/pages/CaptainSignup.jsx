import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [userData, setUserData] = useState({});
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({ fullname : { firstname : firstname , lastname : lastname } ,  email: email, password: password });
      setPassword("");
      setEmail("");
      setFirstname('');
      setLastname(''); 
    };
  return (
    <>
     <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png"
            alt="uber-logo"
            className="w-24 mb-2"
          />
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <h3 className="text-xl mb-2 font-bold">What's your Name Captain</h3>
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 text-lg w-1/2 placeholder:text-base"
                required
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 text-lg w-1/2 placeholder:text-base"
                required
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <h3 className="text-xl mb-2 font-bold">What's your email</h3>
            <input
              type="email"
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 text-lg w-full placeholder:text-base"
              required
              placeholder="exaple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-xl mb-2 font-bold">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-5  rounded px-4 py-2 text-lg w-full placeholder:text-base"
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#24ff48] text-white mb-2  rounded px-4 py-2 text-lg w-full">
              Sign Up
            </button>
          </form>
          <p className="text-center mb-2">
            Already Have an Account ?
            <Link to={"/captain-login"} className="text-blue-600">
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
        <div className="text-[10px] leading-tight ">
          The site is protected by reCAPTCHA and the <span className="underline">Google Policy</span> and the <span className="underline">Terms of Service Apply</span>
        </div>
      </div> 
    </>
  )
}

export default CaptainSignup
