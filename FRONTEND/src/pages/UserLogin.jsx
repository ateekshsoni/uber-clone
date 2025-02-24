import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const {user , setuser}  = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData = {
      email : email,
      password : password
    }
    setPassword("");
    setEmail("");
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if(response.status === 200){
      const data = response.data;
      setuser(data.user)
      localStorage.setItem('token' , data.token);
      navigate('/home')
    }
  }
  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://logospng.org/download/uber/logo-uber-4096.png"
            alt="uber-logo"
            className="w-12 mb-5"
          />
          <form action="" onSubmit={(e)=> submitHandler(e)}>
            <h3 className="text-xl mb-2 font-bold">What's your email</h3>
            <input
              type="email"
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
            New here ?
            <Link to={"/signup"} className="text-blue-600">
              {" "}
              Create New Account{" "}
            </Link>
          </p>
        </div>
        <div>
          <Link to={'/captain-login'} className="bg-[#27d427] flex items-center justify-center text-white mb-7  rounded px-4 py-2 text-lg w-full">
            Sign in as Captain
          </Link>
        </div>
      </div>
    </>
  );
};

export default Userlogin;