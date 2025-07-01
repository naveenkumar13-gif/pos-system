import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faSearch,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 px-8 bg-[#1a1a1a]">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUtensils} className="text-white text-2xl" />
        <h1 className="text-2xl font-bold text-white">Logo</h1>
      </div>
      <div className="flex items-center gap-2 bg-[#1f1f1f] rounded-full px-4 py-2  w-[500px]">
        <FontAwesomeIcon icon={faSearch} className="text-white text-2xl" />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-md bg-transparent outline-none text-white"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-full p-3">
          <FontAwesomeIcon icon={faBell} className="text-white text-2xl" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-[#f5f5f5] text-xl font-bold">NK</h1>
          <p className="text-[#ababab] text-sm font-medium">Admin</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
