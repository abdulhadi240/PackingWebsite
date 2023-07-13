import React from "react";

const Info = ({ Icon, Text, Label }) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="h-10 w-10 rounded-full bg-[#98ca3e] flex justify-centre text-center ">
        <Icon size={27} color={'white'}  className=' ml-[7px] mt-[6px]'/>
      </div>
      <div className="text-[12px] mt-1">
        <div className="font-bold">{Text}</div>
        <div className="font-semi-bold">{Label}</div>
      </div>
    </div>
  );
};

export default Info;
