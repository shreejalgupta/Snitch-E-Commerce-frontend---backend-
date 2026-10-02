import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center login-gradiant-bg ">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
