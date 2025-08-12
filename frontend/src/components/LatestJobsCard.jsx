import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCard = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-md text-lg">Company name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">Description of the job</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant={"ghost"}>12 Positions</Badge>
        <Badge className="text-[#f83002] font-bold" variant={"ghost"}>PartTime</Badge>
        <Badge className="text-[#7209b7] font-bold" variant={"ghost"}>24 LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobsCard;
