import React from "react";
import Button from "../components/Button";
import Indicator from "../components/vectors/Indicator";
import "./Login.css";
const Login = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="sidecover">
        <p className=" font-bold text-2xl pt-[1.9375rem] ">Logo</p>
        <div className="mb-[12.25rem]">
          <p className=" font-medium text-2xl pt-[1.9375rem] text-center">
            All in one place
          </p>
          <p className="font-light text-center">
            Manage all your goods and inventory from your PC
          </p>
          <span className="flex justify-center">
            <Indicator />
          </span>
        </div>
      </div>
      <div className="rightbar mt-[9.5rem]">
        <p className="font-bold text-[#093D5E] text-[2rem] text-center">
          Login
        </p>
        <p className="text-[#676767] pt-6 ">
          Welcome to Point Of Sales. To Login, input your username and password
          below.
        </p>
        <form action="">
          <p className="font-medium text-base text-[#2e2e2e] pb-[0.625rem] mt-[5rem]  ">
            Username
          </p>
          <input type="text" placeholder="E.g Bakare safiyyah" />

          <p className="font-medium text-base text-[#2e2e2e] pb-[0.625rem] mt-[3rem]  ">
            Password
          </p>
          <input type="text" placeholder="Adeola" />
          <Button label="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
