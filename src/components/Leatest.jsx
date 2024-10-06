import React from 'react'
import Container from './Container'
import chairimg5 from '../assets/chair5.png'
import chairimg6 from '../assets/chair6.png'
import chairimg7 from '../assets/chair7.png'
import chairimg8 from '../assets/chair8.png'
import chairimg9 from '../assets/chair9.png'
import chairimg10 from '../assets/chair10.png'

import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";

const Leatest = () => {
  return (
    <Container className={`py-[129px]`}>
    <div className=" text-center">
        <h2 className='text-[42px] text-[#151875] font-josefin font-bold'>Leatest Products</h2>
    </div>

    <div className="pt-5">
        <div className="">
            <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
                <li className="me-2 text-[16px] text-[#151875] hover:text-[#FB4997] px-[20px]">New Arrivel</li>
                <li className="me-2  text-[16px] text-[#151875] hover:text-[#FB4997] px-[20px]" > Best Seller</li>
                <li className="me-2 text-[16px] text-[#151875] hover:text-[#FB4997] px-[20px]" >Featured</li>
                <li className="me-2 text-[16px] text-[#151875] hover:text-[#FB4997] px-[20px]">Special Offer</li>
                
            </ul>
        </div>
        </div>

        <div >
            <div className="pt-[62px]">
                <div className="">
                <div className="flex justify-between">
                <div className='w-[30%]'>
                        <div className='relative overflow-hidden'>
                        <div className='w-[350px] h-[250px] bg-[#f7f7f7d5] hover:bg-transparent duration-500'>
                            <div className='pt-[33px] pb-[8px] pl-[73px] pr-[64px]'>
                            <img src={chairimg5} alt="" />
                            </div>
                        </div>

                        <div className=''>
                        <div className="flex justify-between bg-[#fff]  mt-[20px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] mr-[130px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                        </div>

                        
                      <div className="absolute top-[11px] w-full left-[-80px] hover:left-[11px] duration-500 mt-[150px]">
                  <div  className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <BsCart className='mx-auto translate-y-[5px]' />
                  </div>
                  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <CiHeart className='mx-auto translate-y-[5px]' />
                  </div>
                  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                  </div>
                </div>

                    </div>

                    </div>


                    <div className='w-[30%]'>
                        <div className='relative overflow-hidden'>
                        <div className='w-[350px] h-[250px] bg-[#f7f7f7d5] hover:bg-transparent duration-500'>
                            <div className='pt-[33px] pb-[8px] pl-[73px] pr-[64px]'>
                            <img src={chairimg6} alt="" />
                            </div>
                        </div>

                        <div className=''>
                        <div className="flex justify-between bg-[#fff]  mt-[20px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] mr-[130px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                        </div>

                        
                      <div className="absolute top-[11px] w-full left-[-80px] hover:left-[11px] duration-500 mt-[150px]">
                  <div  className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <BsCart className='mx-auto translate-y-[5px]' />
                  </div>
                  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <CiHeart className='mx-auto translate-y-[5px]' />
                  </div>
                  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                  </div>
                </div>

                    </div>

                    </div>


                    <div className='w-[30%]'>
                        <div className='relative overflow-hidden'>
                        <div className='w-[350px] h-[250px] bg-[#f7f7f7d5] hover:bg-transparent duration-500'>
                            <div className='pt-[33px] pb-[8px] pl-[73px] pr-[64px]'>
                            <img src={chairimg7} alt="" />
                            </div>
                        </div>

                        <div className=''>
                        <div className="flex justify-between bg-[#fff]  mt-[20px]">
                                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                                    <h6 className='text-[16px] mr-[130px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                                </div>
                        </div>

                        
                      <div className="absolute top-[11px] w-full left-[-80px] hover:left-[11px] duration-500 mt-[150px]">
                  <div  className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <BsCart className='mx-auto translate-y-[5px]' />
                  </div>
                  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <CiHeart className='mx-auto translate-y-[5px]' />
                  </div>
                  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                    <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                  </div>
                </div>

                    </div>

                    </div>

              
     
            
</div>
</div>
</div>

<div className="pt-[62px]">
<div className="">
<div className="flex justify-between">

<div className='w-[30%]'>
        <div className='relative overflow-hidden'>
        <div className='w-[350px] h-[250px] bg-[#f7f7f7d5] hover:bg-transparent duration-500'>
            <div className='pt-[33px] pb-[8px] pl-[73px] pr-[64px]'>
            <img src={chairimg8} alt="" />
            </div>
        </div>

        <div className=''>
        <div className="flex justify-between bg-[#fff]  mt-[20px]">
                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                    <h6 className='text-[16px] mr-[130px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                </div>
        </div>

        
      <div className="absolute top-[11px] w-full left-[-80px] hover:left-[11px] duration-500 mt-[150px]">
  <div  className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <BsCart className='mx-auto translate-y-[5px]' />
  </div>
  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <CiHeart className='mx-auto translate-y-[5px]' />
  </div>
  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
  </div>
</div>

    </div>

    </div>


    <div className='w-[30%]'>
        <div className='relative overflow-hidden'>
        <div className='w-[350px] h-[250px] bg-[#f7f7f7d5] hover:bg-transparent duration-500'>
            <div className='pt-[33px] pb-[8px] pl-[73px] pr-[64px]'>
            <img src={chairimg9} alt="" />
            </div>
        </div>

        <div className=''>
        <div className="flex justify-between bg-[#fff]  mt-[20px]">
                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                    <h6 className='text-[16px] mr-[130px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                </div>
        </div>

        
      <div className="absolute top-[11px] w-full left-[-80px] hover:left-[11px] duration-500 mt-[150px]">
  <div  className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <BsCart className='mx-auto translate-y-[5px]' />
  </div>
  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <CiHeart className='mx-auto translate-y-[5px]' />
  </div>
  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
  </div>
</div>

    </div>

    </div>



    <div className='w-[30%]'>
        <div className='relative overflow-hidden'>
        <div className='w-[350px] h-[250px] bg-[#f7f7f7d5] hover:bg-transparent duration-500'>
            <div className='pt-[33px] pb-[8px] pl-[73px] pr-[64px]'>
            <img src={chairimg10} alt="" />
            </div>
        </div>

        <div className=''>
        <div className="flex justify-between bg-[#fff]  mt-[20px]">
                    <h4 className='text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]'>Comfort Handy Craft</h4>
                    <h6 className='text-[16px] mr-[130px] text-[#151875] font-josefin font-normal'>$42.00</h6>
                </div>
        </div>

        
        <div className="absolute top-[11px] w-full left-[-80px] hover:left-[11px] duration-500 mt-[150px]">
  <div  className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <BsCart className='mx-auto translate-y-[5px]' />
  </div>
  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <CiHeart className='mx-auto translate-y-[5px]' />
  </div>
  <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
    <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
  </div>
</div>

    </div>

    </div>


  </div>


</div>

</div>


</div>
       </Container>
  )
}

export default Leatest

