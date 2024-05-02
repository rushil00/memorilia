import React from "react";
import Image from 'next/image'
import imgSrc_4 from '../../../assets/SVG/asset-5.1.png'

interface ContainerProps {
  className?: string;
}

export const Container4: React.FC<ContainerProps> = ({ className }) => {
  return (
    <><div className=''><h2 className="text-xl text-gray-700">Name 5</h2>
          <p className="font-bold text-2xl">Value 5</p></div><div className='row-span-2 w-full]'>
              <Image src={imgSrc_4} alt="Your Image" className={` md:w-[80lvw] sm:w-[80svw] flex object-cover bg-blend-color-brun`} />
          </div></>
  );
};
