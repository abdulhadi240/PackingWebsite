import React from "react";

const Info = ({ Icon, Text, Label }) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="xl:h-10 xl:w-10 lg:h-10 lg:w-10 rounded-full bg-[#98ca3e] flex justify-centre text-center ">
        <Icon size={27} color={'white'}  className='   lg:ml-[5px] xl:ml-[7px] mt-[6px]'/>
      </div>
      <div className="text-[12px] mt-1">
        <div className="font-bold">{Text}</div>
        <div className="font-semi-bold lg:text-xs">{Label}</div>
      </div>
    </div>
  );
};

export default Info;
