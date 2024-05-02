import React from "react";


interface ContainerProps {
  className?: string;
}

export const Container5: React.FC<ContainerProps> = ({ className }) => {
  return (
    <>

        <div className='hidden'>
        </div>

        <div className='md:h-[100lvh] sm:h-[100svh] '>
            {/* <Image src={imgSrc_5} alt="Your Image" className={`md:w-[64lvw] md:h-[100lvh]  sm:h-[104svh]`}  /> */}
            {/* <LoginCard/> */}
        </div>

    </>
  );
};
