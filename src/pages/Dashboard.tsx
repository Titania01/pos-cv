import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div>
        <div className="flex items-center justify-between">
          <div className="border-2 w-[21.3125rem] h-[7.875rem] mt-[2rem] flex justify-evenly items-center rounded-lg">
            <img src="/images/chart.svg" alt="" className="bg-[#f1f9fe]" />
            <span>
              <p>Daily sales</p>
              <p>$24,500</p>
            </span>
          </div>
          <div className="border-2 w-[21.3125rem] h-[7.875rem] mt-[2rem] flex justify-evenly items-center rounded-lg">
            <img src="/images/chart.svg" alt="" className="bg-[#f1f9fe]" />
            <span>
              <p>Daily sales</p>
              <p>$24,500</p>
            </span>
          </div>
          <div className="border-2 w-[21.3125rem] h-[7.875rem] mt-[2rem] flex justify-evenly items-center rounded-lg">
            <img src="/images/chart.svg" alt="" className="bg-[#f1f9fe]" />
            <span>
              <p>Daily sales</p>
              <p>$24,500</p>
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
