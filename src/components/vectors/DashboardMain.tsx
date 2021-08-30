import React from "react";

const DashboardMain = () => {
  return (
    <div className="pt-6 ml-[3.5rem] mr-[3.6875rem]">
      <div className="flex justify-between border-b-2 pb-[1.75rem]">
        <p className="text-xl font-bold">DashBoard</p>
        <div className="flex items-center justify-between w-[24.115]">
          <img src="/images/search.svg" alt="" className="pr-[3.6775rem]" />
          <img src="/images/bell.svg" alt="" className="pr-[4.2188rem]" />
          <span className="flex items-center border-l-2 pl-[1.5rem]">
            <img src="/images/image.svg" alt="" />
            <p className="pl-[1rem]">Nicole</p>
          </span>
        </div>
      </div>
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
  );
};

export default DashboardMain;
