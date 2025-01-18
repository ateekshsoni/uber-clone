import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const submitHandler = async (e)=>{
      e.preventDefault();
      const captain = {
        email: email,
        password: password
      }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token' , data.token);
        navigate('/captain-home')
      }
      setPassword("");
      setEmail("");
    }
  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png"
            alt="uber-logo"
            className="w-24 mb-4"
          />
          <form action="" onSubmit={(e)=> submitHandler(e)}>
            <h3 className="text-xl mb-2 font-bold">What's your email</h3>
            <input
              type="text"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 text-xl w-full placeholder:text-base"
              required
              placeholder="exaple@email.com"
              value={email}  
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-xl mb-2 font-bold">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-7  rounded px-4 py-2 text-xl w-full placeholder:text-base"
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#000] text-white mb-2  rounded px-4 py-2 text-lg w-full">
              Login
            </button>
          </form>
          <p className="text-center mb-2">
            Join a feet.
            <Link to={"/captain-signup"} className="text-blue-600">
              {" "}
              Register As a Captain{" "}
            </Link>
          </p>
        </div>
        <div>
          <Link to={'/login'} className="bg-[#35fff5] flex items-center justify-center text-white mb-7  rounded px-4 py-2 text-lg w-full">
            Sign in as User
          </Link>
        </div>
      </div>
    </>
  )
}
export default CaptainLogin;