import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>FullName</Label>
            <Input type="text" placeholder="Enter your name" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="demo@gmail.com" />
          </div>
          <div className="my-2">
            <Label>PhoneNumber</Label>
            <Input type="text" placeholder="" />
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
            <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                 accept="image/*"
                 type="file"
                 className='cursor-pointer'
                />
            </div>
          </div>
          <button className="w-full bg-black text-white hover:text-white hover:bg-gray-700 p-2 rounded-md cursor-pointer mb-2">Signup</button>
          <span>Already have an account? <Link to={"/login"} className="text-blue-600 my-2">Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
