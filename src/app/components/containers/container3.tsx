import React from "react";
import Image from 'next/image'
import imgSrc_6 from '../../../assets/SVG/asset-10.png'

interface ContainerProps {
  className?: string;
}

export const Container3: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div className=' grid grid-rows-10 gap-2 h-full w-full '>

      <div className='row-span-3 bg-transparent w-full]'> This is where your stories come together!
      </div>

      <div className='row-start-4 relative row-span-3 bg-transparent flex justify-center items-center '>
        <Image 
          src={imgSrc_6} alt="Your Image" 
          className={`md:flex md:absolute md:top-0 md:w-[33lvw]  sm:w-[33.33svw] sm:top-0 flex object-cover`}  />
      </div>

      <div className='row-span-4 bg-transparent w-full]'>
      </div>

  </div>
  );
};




