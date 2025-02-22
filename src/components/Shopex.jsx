import React from 'react'
import Container from './Container'
import truckimg from "../assets/truck.png"
import coinimg from "../assets/coin.png"
import batchimg from "../assets/batch.png"
import phoneimg from "../assets/phone.png"

const Shopex = () => {
  return (
    <Container>
        <div className="lg:py-[58px]">
            <h1 className='lg:text-[42px] text-[38px] text-center text-[#151875] font-josefin font-bold'>What Shopex Offer!</h1>
        </div>

        <div className="">
            <div className="lg:flex justify-between lg:mx-0 mx-[15px]">
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px]  lg:pb-[27px] pb-[10px] text-center">
                        <img src={truckimg} className='h-[70px] w-[70px] mx-auto'  alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={coinimg}className='h-[70px] w-[70px] mx-auto' alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div> 
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={batchimg} className='h-[70px] w-[70px] mx-auto' alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px]  lg:pb-[27px] pb-[10px] text-center">
                        <img src={phoneimg} className='h-[70px] w-[70px] mx-auto' alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Shopex