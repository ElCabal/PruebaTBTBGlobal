import React from "react";
import { RiPhoneFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { AiTwotoneMail, AiOutlineLink } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

const Card = ({ user }) => {
  return (
    <article
      className="bg-gray-900 rounded shadow-lg text-neutral-200 w-80 px-2 py-5 hover:scale-105 hover:duration-700 font-quicksand flex flex-col "
      key={user.id}
    >
      <div className="flex gap-6 items-center justify-center w-full pb-2">
        <FaUserSecret className="text-5xl" />
        <p className="text-xl underline decoration-double">{user.name}</p>
      </div>
      <div className="pl-4">
        <div className="flex gap-2 max-w-2xl text-red-300">
          <RiPhoneFill className="text-2xl" />
          <span className="text-sm">{user.phone}</span>
        </div>
        <div className="flex gap-2 text-yellow-300">
          <AiTwotoneMail className="text-2xl" />
          <span className="text-sm">{user.email}</span>
        </div>
        <div className="flex gap-2 text-blue-300">
          <AiOutlineLink className="text-2xl" />
          <a href={user.website} className="text-sm">
            {user.website}
          </a>
        </div>
        <div className="flex gap-2 text-green-300">
          <BsBuilding className="text-2xl" />
          <span className="text-sm">{user.company.name}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
