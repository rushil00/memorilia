import imgSrc from '../../assets/SVG/filmReel-4.png'
import imgSrc_3 from '../../assets/SVG/filmReel-3.png'
import imgSrc_2 from '../../assets/SVG/filmReel-2.png'
import imgSrc_4 from '../../assets/SVG/asset-5.1.png'
import imgSrc_6 from '../../assets/SVG/asset-10.png'
import imgSrc_7 from '../../assets/SVG/asset-12.png'
import imgSrc_8 from '../../assets/SVG/asset-14.png'
// import Button from './button'
// import DarkNav from './DarkNav';
// import LoginCard from './LoginComp';
import Image from 'next/image'
import { Button } from './button'
import Navbar from './navbar'
import { Container0 } from './containers/container0'
import { Container1 } from './containers/container1'
import { Container2 } from './containers/container2'
import { Container3 } from './containers/container3'
import { Container4 } from './containers/container4'
import { Footer } from './containers/container6'


const Sidebar = () => {
    const boxStyle= 'bg-gray-400 border-0 border-black rounded-xl flex flex-row flex-col '
      return (
    <div className="grid md:grid-cols-11 auto-rows gap-[16px] m-[24px]">
    
      <div className={ `${boxStyle} md:col-span-5 md:row-span-2 md:h-[100lvh] sm:h-auto overflow-hidden object-cover bg-transparent`}  >
        Box 0
        <Container0/>
      </div>

      <div className={ `${boxStyle} md:col-span-6 md:h-[100lvh] bg-transparent`} >
        Box 1
        <Container1/>
      </div>
    
    
      <div className={ `${boxStyle} relative md:row-span-3 md:col-span-6 h-[100lvh] flex items-center`}  >
        Box 2
        <Container2/>
      </div>
    
    
      <div className={ `${boxStyle} relative md:row-span-2 md:col-span-5 h-[100lvh] flex place-self-top bg-transparent`}  >
        Box 3
        <Container3/>
      </div>
    
    
      <div className={ `${boxStyle} md:col-span-7`}>
        Box 4
        <Container4/>
      </div>
    
    
      <div
        className={ `${boxStyle} relative md:col-span-4 md:h-[100lvh] sm:h-[100svh] `}  >
          Box 5
      </div>   
          
      <Footer/>

    </div>
      );
    };
    
    
    const Grid1 = () => { 
      return (<>
        <p className="font-bold text-2xl">Value 0</p>
        <div className='grid grid-flow-col auto-cols-auto overflow-y-hidden md:gap-[8px] sm:gap-[2px] flex-shrink '>
          <div className="col-span-1 flex justify-center w-auto ]">
            <Image src={imgSrc} alt="Your Image" className={` relative top-0 object-cover md:w-[16lvw] sm:h-[96lvh] `}  />
          </div>
          <div className='col-span-1 flex justify-center w-auto'>
            <Image src={imgSrc_3} alt="Your Image" className={`relative object-cover md:w-[16lvw] sm:h-[100lvh]`}  />
          </div>
          <div className='col-span-1 flex justify-center'>
            <Image src={imgSrc_2} alt="Your Image" className={` relative top-0 object-cover md:w-[12lvw] sm:h-[104lvh]`}  />
          </div>
        </div>
      </>
      );
    };
    

    const Grid2_2x1= () => {
      return (
        <>
        {/* <DarkNav/> */}
        </>
      );
    };
    
    
    
    
    export default Sidebar;