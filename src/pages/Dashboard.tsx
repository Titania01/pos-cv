import React from "react";
import Sidenav from "../components/Sidenav";
import DashboardMain from "../components/vectors/DashboardMain";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grid w-screen h-screen grid-cols-12">
      <div className="col-span-2">
        <Sidenav />
      </div>
      <div className="col-span-10">
        <DashboardMain />
      </div>
    </div>
  );
};

export default Dashboard;
