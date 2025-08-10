import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="demo@gmail.com" />
          </div>
        
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="********" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <button className="w-full bg-black text-white hover:text-white hover:bg-gray-700 p-2 rounded-md cursor-pointer mb-2">
            Login
          </button>
          <span>
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-600 my-2">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
