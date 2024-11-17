import { FaTwitter } from "react-icons/fa";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { LiaTwitterSquare } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";


interface SideBarSchema {
  id: Number;
  title: String;
  icon: React.ReactNode;
}

const sideBarMenu: SideBarSchema[] = [
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    id: 1,
    title: "Notifications",
    icon: <RiNotification2Line />,
  },
  {
    id: 1,
    title: "Messages",
    icon: <MdOutlineEmail />,
  },
  {
    id: 1,
    title: "Bookmarks",
    icon: <FaRegBookmark />,
  },
  {
    id: 1,
    title: "Twitter Blue",
    icon: <LiaTwitterSquare />,
  },
  {
    id: 1,
    title: "Profile",
    icon: <FaRegUser />,
  },
  {
    id: 1,
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-60">
        <div className="col-span-3 pt-2 ml-12 ">
          <div className="ml-2 h-12 w-12 flex justify-center items-center hover:bg-gray-800 rounded-full cursor-pointer transition-all">
            <FaTwitter className="text-2xl" />
          </div>
          <div className="mt-4 font-bold pr-6">
            <ul>
              {sideBarMenu.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-x-4 rounded-full px-5 py-2 mb-1 w-fit hover:bg-gray-800"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-md">{item.title}</span>
                </li>
              ))}
              <button className="bg-[#1d9bf0] text-sm rounded-full w-full py-2 mt-5">Twitter</button>
            </ul>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-y-auto">
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
