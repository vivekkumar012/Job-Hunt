import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html", "CSS", "Java", "C++"];
const isresume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://imgs.search.brave.com/nVviH3UJEEsBvuI71VqnJ3T1cuzEok1-I6R75W8XkbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdDk1/d2ZOZGsvMS8wLzE2/MDB3L2NhbnZhLXB1/cnBsZS1hbmQtZ3Jl/ZW4tc2ltcGxlLXdv/bWFuLWluc3RhZ3Jh/bS1wcm9maWxlLXBp/Y3R1cmUtVmJyNkdS/eTVZYTQuanBn"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat beatae soluta recusandae.
              </p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>vivek@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>85468985</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-black font-semibold">Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>Not Applicable</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label className="text-md font-bold">Resume</label>
          {isresume ? (
            <a
              href="https://youtube.com/"
              target="blank"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Resume
            </a>
          ) : (
            <span>Not Applicable</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
