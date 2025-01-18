import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        const logoutCaptain = async ()=>{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate("/login");
            }
        };
        logoutCaptain();
    } , [navigate]
);
  return (
    <div>
      Logging out ..........
    </div>
  )
}

export default CaptainLogout
