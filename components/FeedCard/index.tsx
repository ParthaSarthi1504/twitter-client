import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 p-4 border-b-2 border-gray-800 cursor-pointer hover:bg-slate-900 transition-all">
      <div className="col-span-1">
        <Image
          src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
          alt="user-avator"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="col-span-11 px-3">
        <h4 className="font-semibold">Elon Musk</h4>
        <p>
          There will be consequences for those who pushed foreign interference
          hoaxes. The Hammer of Justice is coming.
        </p>
        <div className="w-full text-xl mt-5 flex justify-between pr-5 ">
          <div>
            <BiMessageRounded />
          </div>
          <div>
            <FaRetweet />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <MdOutlineFileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
