import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../redux/Shopslice";
import { toast } from "react-toastify";
const Productcard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = data.title;
  const idString = (_id) => {
    return String(_id).toLocaleLowerCase().split(" ").join("");
  };
  const rootid = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootid}`, {
      state: {
        item: data,
      },
    });
  };
  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={data.image}
          alt="productimage"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
            {data.title.length > 16 ? `${data.title.substring(0, 16)}...` : data.title}
            </h2>
          </div>
          <div className="flex w-28 text-sm justify-end  gap-2 relative overflow-hidden">
            <div className="text-sm gap-2 transform group-hover:translate-x-24 transition-transform duration-500 relative w-28 flex justify-end">
              <p className="line-through text-gray-500">${data.oldPrice}</p>
              <p className="font-semibold">${data.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  reset({
                    _id: data._id,
                    title: data.title,
                    image: data.image,
                    price: data.price,
                    quantity: 1,
                    description: data.description,
                  })
                ) & toast.success("Added to cart")
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform translate-x-32 group-hover:translate-x-1 transition-transform cursor-pointer duration-500"
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{data.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {data.isNew && (
            <p className="bg-black text-white font-semibold px-6 py-1">Sale</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productcard;
