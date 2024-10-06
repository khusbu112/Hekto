import React, { useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar, FaList,FaBars } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import chairimg1 from '../assets/chair1.png'
import { Link } from 'react-router-dom'


const ShopGrid = () => {

  return (
    <div className=''>
 <div className="bg-[#F6F5FF] lg:mt-5 lg:pt-[96px] lg:py-0 py-[40px] lg:pb-[126px]">
              <div className='container ml-44'>
                    <div className="lg:mx-0 mx-[15px]">
                        <h2 className='lg:text-[36px] text-[30px] text-[#101750] font-josefin font-bold'>Shop Grid Default</h2>
                    </div>
                    <div className="lg:mx-0 mx-[15px]">
                        <p className='lg:text-[16px] text-[14px] text-[#000000] font-lato font-medium '><Link to={'/'}>Home.Pages</Link>  . <span className='text-[#FB2E86]'>Shop Grid Default</span></p>
                    </div>
                    </div>
            </div>

            <div className='container'> 
            <div className=" pt-[124px] pb-[144px] lg:mx-0 mx-[15px]">
                    <div className="lg:flex justify-between items-center ml-44">
                        <div className="lg:w-[30%]">
                            <h4 className="font-jose font-bold text-[22px] text-[#151875]">Ecommerce Acceories & Fashion item </h4>
                            <p className="font-lato font-normal text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className="lg:w-[40%] flex justify-around items-center lg:pt-0 pt-[20px]">
                        <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">Per Page:</p>
                                <div className="border-[1px] border-[#E7E6EF] h-[25px] w-[55px]"></div>
                            </div>
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E]">Sort By:</p>
                                <form className=" w-[96px] pl-2 items-center">
                                    <select className=" border-[#E7E6EF] font-lato font-bold text-[#8A8FB9] text-[12px] pt-2 pb-2 pl-3 pr-3 ">
                                        <option selected value="2">2</option>
                                        <option value="4">4</option>
                                        <option value="8">8</option>
                                        <option value="10">10</option>
                                        <option value="14">14</option>
                                        <option value="18">18</option>
                                        <option value="22">22</option>
                                    </select>
                                </form>
                            </div>
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">View:</p>
                                <FaList className="text-[#151875] mr-2" />
                                <IoGridSharp className="text-[#151875] active:bg-black" />

                            </div>
                            </div>
                    </div>
                </div>

                <div className="flex justify-between lg:mx-0 mx-[15px] relative">
                <div className="w-full lg:ml-44 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 group ">
            <div className="drop-shadow-xl">
              <div className="lg:w-full w-[90%] h-[361px] relative overflow-hidden lg:mx-0 mx-auto">
                <div className="pt-[46px] -z-10 pb-[12px] px-[40px] bg-[#F6F7FB]">
                  <img className='h-[200px] mx-auto' src={chairimg1} alt="" />
                </div>
   
                <div className="text-center z-50 bg-white group-hover:bg-[#2F1AC4] duration-500 ease-in-out pt-[15px] pb-[17px]">
                 
                  <div className="flex justify-center">
                    <div className="h-[5px] w-[16px] bg-[#05E6B7] rounded-[10px]"></div>
                    <div className="h-[5px] mx-[5px] w-[16px] bg-[#F701A8] rounded-[10px]"></div>
                    <div className="h-[5px] w-[16px] bg-[#FFEAC1] rounded-[10px]"></div>
                  </div>
                  <h3 className='text-[14px] text-[#151875] font-josefin font-normal group-hover:text-white duration-500'>Code - Y523201</h3>
                  <span className='pt-[10px] text-[14px] text-[#151875] font-josefin font-normal group-hover:text-white duration-500'>$42.00</span>
                </div>
  
                <div className="absolute top-[11px] w-full left-[-80px] group-hover:left-[11px] duration-500 flex">
                  <div onClick={() => handleCart(item)} className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-full hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
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
  )
}

export default ShopGrid