import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "qjssjndndoie";

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 ">2 days ago</p>
        <Button variant={"outline"} className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant={"outline"} size={"icon"}>
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/1qdlW9Z5WiVq7VIcoCBYpX25CU_nS77nwjVciOnLuRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/MTc3LzQzNy9zbWFs/bC9zLWxldHRlci1s/b2dvLW9mLWJyYW5k/LWlkZW50aXR5LWNv/bXBhbnktYW5kLWJ1/c2luZXNzLWxvZ28t/b24td2hpdGUtYmFj/a2dyb3VuZC1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Description aayega yaha per</p>
      </div>
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
      <div className="flex items-center gap-2 mt-4">
        <Button onClick={() => navigate(`/description/${jobId}`)} variant={"outline"} className={"cursor-pointer"}>Details</Button>
        <Button className="bg-[#7209b7] text-white ">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
