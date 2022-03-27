import React from "react";
import { Outlet } from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";

const Tuiter = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet />
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <h2>Who to follow</h2>
        </div>
      </div>
    </>
  );
};

export default Tuiter;
