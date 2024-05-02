import React from "react";
import Image from 'next/image'
import imgSrc_6 from '../../../assets/SVG/asset-10.png'

interface ContainerProps {
  className?: string;
}

export const Footer: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div
    className={ `md:col-span-11 md:h-[33lvh] sm:h-[33svh]`}  >
    <div className='bg-[#595987] h-full'><p className="font-bold text-2xl flex justify-center">Footer</p> </div>
  </div>
  );
};
