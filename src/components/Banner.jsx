import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const Banner = () => {
    const [currentSlide,setcurrentSLide]=useState(0)
  const data = [
    "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const prevSlide=()=>{
    setcurrentSLide(currentSlide === 0 ? 3:(prev)=>prev-1)
  }
  const nextSlide=()=>{
    setcurrentSLide(currentSlide === 3 ? 0:(prev)=>prev+1)
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="select-none transition-transform duration-1000 w-[400vw] h-full flex">
          <img
            className="w-screen h-[500px] object-cover bg-center"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-[500px] object-cover bg-center"
            src={data[1]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-[500px] object-cover bg-center"
            src={data[2]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-[500px] object-cover bg-center"
            src={data[3]}
            alt="ImgOne"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44 text-white text-3xl ">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
