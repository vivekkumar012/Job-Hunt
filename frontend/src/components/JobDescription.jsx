import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {
  const isApplied = false;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant={"ghost"}>
              12 Positions
            </Badge>
            <Badge className="text-[#f83002] font-bold" variant={"ghost"}>
              PartTime
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant={"ghost"}>
              24 LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg px-4 py-2 ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad] text-white cursor-pointer"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div className="my-4">
          <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Fronted Developer</span></h1>
          <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">Darbhanga Bihar</span></h1>
          <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur voluptate quibusdam laborum harum esse recusandae culpa voluptas voluptates doloremque cumque, fuga ipsa adipisci quasi explicabo saepe, temporibus, atque quod?</span></h1>
          <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
          <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">12 LPA</span></h1>
          <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">78</span></h1>
          <h1 className="font-bold my-1">Posted date: <span className="pl-4 font-normal text-gray-800">25-06-2025</span></h1>
      </div>
    </div>
  );
}

export default JobDescription;
