import React from "react";
import Link from "next/link";
const Info = ({ Icon, Text, Label , src}) => {
  return (
    <Link href={src} target="_blank" ><div className="flex flex-row gap-1 group transition">
      <div className="xl:h-10 xl:w-10 lg:h-10 lg:w-10 rounded-full bg-primary-100 transition flex justify-centre text-center group-hover:bg-secondary-100 cursor-pointer">
        <Icon size={27} color={'white'}  className='   lg:ml-[7px] xl:ml-[7px] mt-[6px]'/>
      </div>
      <div className="text-[12px] mt-1 cursor-pointer">
        <div className="font-bold">{Text}</div>
        <div className="font-semi-bold text-[9px] xl:text-xs cursor-pointer">{Label}</div>
      </div>
    </div></Link>
  );
};

export default Info;
