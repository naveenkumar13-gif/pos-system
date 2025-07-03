import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faTable,
  faEllipsis,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()
  const [apply, setApply] = useState("home");
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] flex justify-around items-center p-2  ">
      <button
        className={`flex gap-2 items-center  justify-center text-center p-3  ${
          apply === "home" ? "bg-[#343434] rounded-md" : ""
        }`}
        onClick={() => {
          setApply("home");
          navigate("/");
        }}
      >
        <FontAwesomeIcon icon={faHome} className="text-white mx-1" />
        <p className="text-[#ababab]  text-xl">Home</p>
      </button>
      <button
        className={`flex gap-2 items-center  justify-center text-center p-3  ${
          apply === "order" ? "bg-[#343434] rounded-md" : ""
        }`}
        onClick={() => {
          setApply("order");
          navigate("/order");
        }}
      >
        <FontAwesomeIcon icon={faBars} className="text-white mx-1" />
        <p className="text-[#ababab]  text-xl ">Order</p>
      </button>
      <button
        className={`flex gap-2 items-center  justify-center text-center p-3  ${
          apply === "table" ? "bg-[#343434] rounded-md" : ""
        }`}
        onClick={() => setApply("table")}
      >
        <FontAwesomeIcon icon={faTable} className="text-white mx-1" />
        <p className="text-[#ababab]  text-xl">Table</p>
      </button>
      <button
        className={`flex gap-2 items-center  justify-center text-center p-3  ${
          apply === "more" ? "bg-[#343434] rounded-md" : ""
        }`}
        onClick={() => setApply("more")}
      >
        <FontAwesomeIcon icon={faEllipsis} className="text-white mx-1" />
        <p className="text-[#ababab]  text-xl">more</p>
      </button>
      <button className="bg-[#f6b100] bottom-5 rounded-full p-3 items-center text-[#f5f5f5] absolute  ">
        <FontAwesomeIcon
          icon={faBell}
          className="text-2xl hover:animate-shake"
        />
      </button>
    </div>
  );
}

export default Footer;
