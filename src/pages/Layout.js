import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../layouts/Menu";

const Layout = () => {
  return (
    <div>
      <>
        <Menu />
        <Outlet />
      </>
    </div>
  );
};

export default Layout;
