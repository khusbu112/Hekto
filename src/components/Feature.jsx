import React, { useEffect, useState } from 'react'
import Container from './Container'
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feature = () => {


  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  let [products, setproducts]= useState([])

  let getData = () => {
    axios.get ("https://dummyjson.com/products").then ((Response)=>{
      setproducts(Response.data.products);
    })
  }

  useEffect(()=>{
  getData()
  },[])

  return (

    <Container className={`lg:py-[80px] py-[80px] `}>
      
   <div className="text-center lg:pt-[80px] lg:pb-0 pb-[40px]">
        <h1 className='lg:text-[42px] text-[38px] text-[#1A0B5B] font-josefin font-bold'>Featured Products</h1>
      </div>


      <Slider {...settings}>
  
      {products.map((item)=>(
     
        <div  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mt-7 group ">
            <div className="drop-shadow-xl">
              <div className="lg:w-full w-[90%] h-[361px] relative overflow-hidden lg:mx-0 mx-auto">
                <div className="pt-[46px] -z-10 pb-[12px] px-[40px] bg-[#F6F7FB]">
                  <img className='h-[200px] mx-auto' src={item.thumbnail} alt="" />
                </div>

                <div className="">
        <Link>  <button className='absolute opacity-0 bottom-[140px] duration-500 z-10 group-hover:opacity-100 right-[50%] translate-x-[50%] text-[12px] text-white font-josefin font-medium py-[8px] px-[13px] bg-[#08D15F] rounded-[3px]'>View Details</button></Link>
              </div>

              <div className="text-center z-50 bg-white group-hover:bg-[#2F1AC4] duration-500 ease-in-out pt-[15px] pb-[17px]">
                  <h4 className='text-[18px] text-[#FB2E86] font-josefin font-bold group-hover:text-white duration-500'>{item.title}</h4>
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
        
      ))}
    

    </Slider>

</Container>
   
  )
}

export default Feature