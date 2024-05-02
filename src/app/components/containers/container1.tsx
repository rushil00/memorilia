import React from "react";
import Image from 'next/image'

import imgSrc_7 from '../../../assets/SVG/Asset 27@20x.png'
import imgSrc_8 from '../../../assets/SVG/Asset 25@20x.png'
import { Button } from '../button'

interface ContainerProps {
  className?: string;
}

export const Container1: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div className='grid grid-rows-10 h-[100lvh]'>
    {/* <div className='row-span-1 gap-2 h-auto auto-rows-min overflow-hidden'>
    <p className="font-bold text-2xl">Value 1</p>
      <Navbar page="Setsuna" />
    </div> */}
    <div className='row-span-4 gap-8 h-full p-[32px] relative grid auto-rows-min overflow-hidden content-center'>
      <Grid1/>
    </div>
    <div className='row-span-4 border-0 border-gray-800 flex justify-center sm:items-center items-start relative'>
      <Button title="Explore" className='bg-purple-200 hover:bg-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-200 absolute top-[-40px] justify-center text-2xl font-extrabold'/>
    </div>

  </div>
  );
};

const Grid1= () => {
    return (
      <>
        <Image src={imgSrc_7} alt="Your Image" className={`absolute top-8`}  />
        <Image src={imgSrc_8} alt="Your Image" className='my-[32px]' />
        {/* <h1 className="my-[80px] text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            where the best of your moments come together to tell your story like never before
          </h1> */}
      </>
    );
  };