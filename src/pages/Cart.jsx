import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.ShopState.productdata);
  const userInfo = useSelector((state) => state.ShopState.userInfo);
  const [totalamt, setotalamt] = useState("");
  const [pay, setpay] = useState(false);
  const handlecheckout = () => {
    if (userInfo) {
      setpay(true);
    } else {
      toast.error("please sign in to checkout");
    }
  };
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setotalamt(price.toFixed(2));
  }, [productData]);
  return (
    <div className="w-full">
      <img
        className="w-full h-[400px]"
        src="https://images.unsplash.com/photo-1689610370713-7cf5fe29449f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3AlMjBob3Jpem9udGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium text-center">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              SubTotal
              <span className="font-bold text-lg">${totalamt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                quas eum et? Fugit quas doloribus inventore animi qui, veritatis
                temporibus!
              </span>
            </p>
          </div>
          <p className="flex items-center justify-between">
            Total <span className="text-xl font-bold">${totalamt}</span>
          </p>
          <button
            onClick={handlecheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to checkout
          </button>
          <>
            {pay && (
              <div className="w-full flex items-center justify-center mt-6">
                <StripeCheckout
                  stripeKey="YOUR KEY"
                  name="Utku Shopping"
                  amount={totalamt * 100}
                  label="Pay to utku-shopping"
                  description={`Your Payment amount is $${totalamt}`}
                  token={pay}
                  email={userInfo.email}
                />
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Cart;
