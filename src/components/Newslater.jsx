import React from 'react'
import wallpaperimg from "../assets/wallpaper.png"
import wallpaper1img from "../assets/wallpaper1.png"

const Newslater = () => {
  return (
    <div className="mt-[160px]">
    
        <div className="text-center py-[100px] bg-cover bg-center lg:bg-cover bg-[url(../src/assets/wallpaper.png)]">
            <h2 className='text-[35px] text-[#151875] font-josefin font-bold '>Get Leatest Update By Subscribe <br /> 0ur Newslater</h2>
            <div className='mt-12'>
            <button className='text-[17px] text-[#fff] border-[2px] border-[#FB2E86] font-josefin font-normal bg-[#FB2E86] py-[16px] px-[40px] rounded-[5px] hover:text-[#FB2E86] hover:bg-[#fff] '>Shop Now</button>
            </div>
        </div>
        
   
    <div className=" flex justify-center lg:mt-[96px] mt-[50px] ">
            <img src={wallpaper1img} alt="" />
        </div>
    </div>
  )
}

export default Newslater