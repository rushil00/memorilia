






import React from "react";
import Image from 'next/image'
import imgSrc_4 from '../../../assets/SVG/asset-5.1.png'

interface ContainerProps {
  className?: string;
}

export const Container2: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div className='grid grid-rows-3 gap-2  h-full w-full'>

        <div className='row-span-2 w-full]'>
            <Image src={imgSrc_4} alt="Your Image" className={` absolute md:w-[80lvw] md:top-[-5%] md:left-[-6.4%] sm:w-[80svw] flex object-cover bg-blend-color-brun`}  />
        </div>

        <div className='row-span-1 flex justify-center items-center '>
        </div>

    </div>
  );
};




