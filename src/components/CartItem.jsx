import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { decrementquantity, deleteItem, incrementQuantity, resetcart } from "../redux/Shopslice";
import { Link } from "react-router-dom";
const CartItem = () => {
  const productData = useSelector((state) => state.ShopState.productdata);
  const dispatch = useDispatch();
  let [Basequanti, setquantity] = useState(1);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div className="flex items-center gap-2 flex-col">
        {productData.map((item) => (
          <div className="flex items-center justify-between gap-6 mt-6">
            <div className="flex items-center gap-2">
              <AiFillCloseCircle
                onClick={() => dispatch(deleteItem(item._id)) & toast.error}
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img className="w-32 h-32 object-cover" src={item.image} alt="" />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  dispatch(
                    decrementquantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                    dispatch(
                        incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      {productData.length > 0 && (
        <button
          onClick={() => dispatch(resetcart())}
          className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300 cursor-pointer"
        >
          Reset Cart
        </button>
      )}
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
