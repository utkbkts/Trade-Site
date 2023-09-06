import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const productdata = useSelector((state) => state.ShopState.productdata);
  const {userInfo} = useSelector((state)=>state.ShopState)
  const user = userInfo
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <h1 className="w-28">LOGO-UTKU</h1>
          </div>
        </Link>
        <div className="flex gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Page
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
        <Link to="/cart">
        <div className="flex items-center gap-8 relative">
            <AiFillShopping className="text-3xl" />
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full h-5 absolute dark:bg-blue-900 dark:text-blue-300 top-5 text-center flex justify-center items-center font-bold w-5">
            {productdata.length}
            </span>
          </div>
        </Link>
         <Link to="/login">
         <img
            src={user ? user.image:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"}
            className="w-8 h-8 rounded-full"
            alt=""
          />
         </Link>
         {user && <p className="text-base font-semibold ">{user.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
