import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faTable,
  faEllipsis,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import Model from "../models";
import CreateOrder from "../../pages/orders/createOrder";

function Footer() {
  const [apply, setApply] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
 
  const navItems = [
    { name: "home", label: "Home", icon: faHome, path: "/" },
    { name: "order", label: "Order", icon: faBars, path: "/order" },
    { name: "table", label: "Table", icon: faTable, path: "/table" },
    { name: "more", label: "More", icon: faEllipsis, path: "/more" },
  ];
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") setApply("home");
    else if (currentPath === "/order") setApply("order");
    else if (currentPath === "/table") setApply("table");
    else if (currentPath === "/more") setApply("more");
  }, [location.pathname]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] flex justify-around items-center p-2">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`flex gap-2 items-center justify-center text-center p-3 ${
            apply === item.name ? "bg-[#343434] text-white rounded-md" : ""
          }`}
          onClick={() => {
            setApply(item.name);
            if (item.path) navigate(item.path);
          }}
        >
          <FontAwesomeIcon icon={item.icon} className="text-white mx-1" />
          <p className="text-[#ababab] text-xl">{item.label}</p>
        </button>
      ))}
      <button
        className="bg-[#f6b100] bottom-5 rounded-full p-3 items-center text-[#f5f5f5] absolute"
        disabled={location.pathname === "/table"}
      >
        <FontAwesomeIcon
          icon={faBell}
          className="text-2xl hover:animate-shake"
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>{" "}
      <Model
        isOpen={isOpen}
        title="Create Order"
        onclose={() => setIsOpen(false)}
      >
        <CreateOrder />
      </Model>
    </div>
  );
}

export default Footer;
