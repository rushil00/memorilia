import React from "react";
import Image from 'next/image'
import imgSrc from '../../../assets/SVG/reel-2@20x.png'
import imgSrc_2 from '../../../assets/SVG/filmReel-2.png'
import imgSrc_3 from '../../../assets/SVG/filmReel-3.png'
import imgSrc_4 from '../../../assets/SVG/asset-5.1.png'
import imgSrc_6 from '../../../assets/SVG/asset-10.png'
import imgSrc_7 from '../../../assets/SVG/asset-12.png'
import imgSrc_8 from '../../../assets/SVG/asset-14.png'

interface ContainerProps {
  className?: string;
}

export const Container0: React.FC<ContainerProps> = ({ className }) => {
  return (
    // <div className='grid grid-rows-10 gap-2 m-[16px] h-full justify-items-center'>
          <div className='relative row-span-full row-start-1 overflow-clip '>
            {/* <div className='absolute overflow-hidden object-cover top-0  inset-x-0 h-36 bg-gradient-to-b to-transparent from-purple-1'></div> */}
            <Grid1/> {/* the grid's first element */}
            {/* <div className='md:absolute overflow-hidden object-cover md:bottom-0 sm:bottom-0 inset-x-0 md:h-[160px] bg-gradient-to-b from-transparent to-[#9BEEEA]'></div> */}
          </div>
    // {/* </div> */}
  );
};

const Grid1 = () => { 
  return (<>
   {/* <div className='felx grid grid-flow-col auto-cols-auto overflow-y-hidden md:gap-[8px] sm:gap-[2px] sm:h-[88svh] p-[16px] bg-white justify-center'>
    <div className="col-span-1 justify-center md:w-4/5 sm:w-auto shrink bg-blue-900 flex-none">
      ABC
      <Image src={imgSrc} alt="Your Image" className={`flex relative top-0 md:w-fit sm:w-fit `}  />
    </div>
    <div className='col-span-1 justify-center grow w-auto bg-slate-600'>
      DEF
      <Image src={imgSrc_3} alt="Your Image" className={`flex relative top-0 object-cover md:w-fit sm:w-auto`}  />
    </div>
    <div className='col-span-1 justify-center w-[81%] bg-slate-200 flex-none'>
      GHI
      <Image src={imgSrc_2} alt="Your Image" className={`flex relative top-0 object-cover md:w-fit sm:w-auto`}  />
    </div> */}
  {/* </div> */}
  <div className="flex gap-4 h-full">
  <div className="flex-none w-[22%] h-full justify-center">
    01
      <Image src={imgSrc} alt="Your Image" className={`flex relative top-0 md:w-fit sm:w-fit `}  />

  </div>
  <div className="grow h-auto max-w-[400%] w-auto justify-center">
    02
      <Image src={imgSrc_3} alt="Your Image" className={`flex relative top-0 object-cover md:w-fit sm:w-auto justify-center`}  />
  </div>
  <div className="flex-none w-[33%] h-14 ">
    03
      <Image src={imgSrc_2} alt="Your Image" className={`flex relative top-0 object-cover md:w-fit sm:w-auto`}  />
  </div>
</div>
  </>
  );
};