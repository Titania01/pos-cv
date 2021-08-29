import React from "react";
import Sidenav from "../components/Sidenav";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 w-screen h-screen">
      <div className="col-span-2">
        <Sidenav />
      </div>
      <div className="col-span-10 bg-red-500"></div>
    </div>
  );
};

export default Dashboard;
