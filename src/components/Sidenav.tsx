import React from "react";
import { NavLink } from "react-router-dom";

import GridIcon from "./vectors/GridIcon";
import BagIcon from "./vectors/BagIcon";
import ChartIcon from "./vectors/ChartIcon";
import ActivityIcon from "./vectors/ActivityIcon";
import SettingIcon from "./vectors/SettingIcon";
import LocationIcon from "./vectors/LocationIcon";
import LogoutIcon from "./vectors/LogoutIcon";

const Sidenav = () => {
  const navItems = [
    {
      name: "Dashboard",
      icon: GridIcon,
      path: "/dashboard",
    },
    {
      name: "My Store",
      icon: BagIcon,
      path: "/mystore",
    },
    {
      name: "Sales",
      icon: ChartIcon,
      path: "/chart",
    },
    {
      name: "Expenses",
      icon: ActivityIcon,
      path: "/expenses",
    },
    {
      name: "Store Config",
      icon: SettingIcon,
      path: "/settings",
    },
    {
      name: "Locations",
      icon: LocationIcon,
      path: "/locations",
    },
    {
      name: "Logout",
      icon: LogoutIcon,
      path: "/logout",
    },
  ];
  return (
    <div className="border-r-2 sidenav">
      <p className="text-[#093D5E] text-center pt-[2rem] font-bold text-2xl pb-[6.66rem]">
        Logo
      </p>
      <div className="flex flex-col">
        {navItems.map((nav, navIndex) => (
          <NavLink
            to={`${nav.path}`}
            className="flex items-center pt-[2.8125rem] pl-[3.3125rem]"
          >
            <nav.icon />
            <span className="pl-[1.2rem]">{nav.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
