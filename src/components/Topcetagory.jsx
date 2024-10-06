
import React from 'react'
import chairimg17 from '../assets/chair17.png'
import chairimg1 from '../assets/chair1.png'
import Slider from "react-slick";

const Topcetagory = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };



  return (
 <div className='container my-auto'>
    <div className='text-center ml-56 '>
        <h1 className='font-bold text-[#151875] text-[50px]'>Top Cetagories</h1>
    </div>
    <div className=" pt-[56px]">
        <Slider {...settings} className='w-[99%] mx-60'>
         
    <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={chairimg17} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 


        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={chairimg1} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div>

        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={chairimg1} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div>

        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={chairimg17} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div>


</Slider>
        
        </div> 
    </div>
  
  )
}

export default Topcetagory