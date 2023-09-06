import React, { useEffect, useState } from "react";
import logo from "../assets/icons.png";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { BsPersonFill, } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { MdShoppingCartCheckout } from "react-icons/md";

const Footer = () => {
  const [email,setemail]=useState("")
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValue = email.trim();
  const [message,setmessage]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!regex.test(emailValue)){
      setmessage("Hatalı email")
      setTimeout(()=>{
        setmessage("")
      },3000)
    }else{
      setmessage("Başarıyla abone oldun")
      setTimeout(()=>{
        setmessage("")
      },3000)
    }
  }

  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <h1>LOGO-UTKU</h1>
          <p className="text-white text-sm tracking-wide">@utkbkts</p>
          <img className="w-24 h-24" src={logo} alt="" />
          <div className="flex gap-4 text-2xl cursor-pointer">
            <FaLinkedin className="text-blue-500 hover:-translate-y-3 transition-all duration-1000" />
            <FaGithub className="hover:-translate-y-3 transition-all duration-1000" />
            <FaYoutube className="text-red-500 hover:-translate-y-3 transition-all duration-1000" />
          </div>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl text-white mb-4">Locate Us</h2>
          <p>Phone: +0000000</p>
          <p>email: utkbktss5@gmail.com</p>
        </div>
        <div className="">
          <h2 className="text-2xl text-white mb-4">Profile</h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <AiFillHome />
            </span>
            Home
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BiLocationPlus />
            </span>
            Help & support
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <MdShoppingCartCheckout />
            </span>
            checkout
          </p>
        </div>
        <div className="footer flex flex-col justify-center gap-2">
            <input value={email} onChange={(e)=>setemail(e.target.value)} className={`bg-transparent outline-none placeholder:text-white text-white border px-4 py-2 text-sm ${!regex.test(emailValue) && email.length > 1? "error":""}`}  placeholder="Email" type="email" />
            {message && <p className="text-white text-sm mt-2">{message}</p>}
            <button onClick={handlesubmit} className="text-sm border text-white border p-1 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
