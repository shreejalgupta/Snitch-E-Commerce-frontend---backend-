import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const LoginProtected = () => {
  const { isAuth } = useSelector((store) => store.auth);

  if(isAuth) return <Navigate to='/' />

  return <Outlet />;
};

export default LoginProtected;
