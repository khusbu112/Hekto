import React from 'react'
import bannerimg from "../assets/banner.png"
import Slider from "react-slick";

const Banner = () => {

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay:true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className=''>
        <img src={bannerimg} alt='banner'/>
      </div>
      <div className=''>
        <img src={bannerimg} alt='banner'/>
      </div>
      <div className=''>
        <img src={bannerimg} alt='banner'/>
      </div>
      <div className=''>
        <img src={bannerimg} alt='banner'/>
      </div>
      <div className=''>
        <img src={bannerimg} alt='banner'/>
      </div>
      
    </Slider>
  )
}

export default Banner