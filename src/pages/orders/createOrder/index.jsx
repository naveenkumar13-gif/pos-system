import React, { useState } from "react";
import Input from "../../../components/input";
import { lableStyle } from "../..";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../../redux/customerSlice";

function CreateOrder() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setCustomer({ name, phone, guest: 0 }));

    navigate("/table");
    console.log();
  };
  return (
    <div className="flex flex-col gap-4 ">
      <Input
        label="Customer Name"
        placeholder="Enter Customer Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Phone Number"
        placeholder=" +91-0123456789"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <label className={lableStyle}>Guest</label>
      <div className="flex items-center p-2 justify-between bg-[#2a2a2a]">
        <Button
          className="text-[#f6b100] text-2xl border-none bg-transparent hover:!bg-transparent hover:!text-[#f6b100]"
          // onClick={(prev) => setCount(prev + 1)}
        >
          -
        </Button>
        <span
          className="text-gray-100
            "
        >
          {" "}
          0 person{" "}
        </span>
        <Button className="text-[#f6b100] text-2xl border-none bg-transparent hover:!bg-transparent hover:!text-[#f6b100]">
          +
        </Button>
      </div>
      <Button
        onClick={handleClick}
        className="bg-[#f6b100] outline-none border-none text-white hover:!text-white transition-colors duration-300 text-lg !py-6 mt-6 hover:!bg-yellow-600"
      >
        Create Order
      </Button>
    </div>
  );
}

export default CreateOrder;
