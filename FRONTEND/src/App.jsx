import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Usersignup from "./pages/Usersignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import Userlogin from "./pages/UserLogin";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import CaptainHome from "./pages/CaptainHome";
import UserLogout from "./pages/UserLogout";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import TestingPage from "./pages/TestingPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/testing-web" element={<TestingPage />} />
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route path="/user/logout" element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        } />
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
        <Route path="/captain-logout" element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          } />
      </Routes>
    </div>
  );
};

export default App;
