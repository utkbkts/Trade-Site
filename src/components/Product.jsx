import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../redux/Shopslice";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setdetails] = useState([]);
  let [Basequanti, setquantity] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setdetails(location.state.item);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
      <div className="w-2/5 relative">
        <img
          src={details.image}
          className="w-full h-[550px] object-cover"
          alt=""
        />
        <div className="absolute top-4 right-0">
          {details.isNew && (
            <p className="bg-black text-white font-semibold px-8 py-1">Sale</p>
          )}
        </div>
      </div>
      <div className="w-3/5 flex flex-col justify-center gap-12">
        <div>
          <h2 className="text-4xl font-semibold">{details.title}</h2>
          <div className="text-sm gap-2 transform group-hover:translate-x-24 transition-transform duration-500 relative w-28 flex justify-start mt-3">
            <p className="line-through text-gray-500">${details.oldPrice}</p>
            <p className="font-semibold text-2xl">${details.price}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-base">
          <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>
          <p className="text-sm text-gray-500">(1 customer views)</p>
        </div>
        <p className="text-base text-gray-500 -mt-3">{details.description}</p>
        <div className="flex gap-4">
          <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
            <p className="text-sm">Quantity</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  setquantity(
                    Basequanti === 1 ? (Basequanti = 1) : Basequanti - 1
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{Basequanti}</span>
              <button
                onClick={() => setquantity(Basequanti + 1)}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                reset({
                  _id: details._id,
                  title: details.title,
                  image: details.image,
                  price: details.price,
                  quantity: Basequanti,
                  description: details.description,
                })
              ) & toast.success(`${details.title} is added`)
            }
            className="bg-black text-white py-2 px-6 active:bg-gray-800"
          >
            Add To Cart
          </button>
        </div>
        <p className="text-base text-gray-500">
          Category:{" "}
          <span className="font-medium capitalize">{details.category}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
