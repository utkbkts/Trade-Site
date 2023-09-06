import React, { useState } from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, removeuser } from "../redux/Shopslice";
const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ShopState.isLoading);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handlegooglogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          adduser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        toast.success("giriş başarılı");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlegithub = (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider).then((res) => {
      const user = res.user;
      dispatch(adduser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      }))
    });
  };

  const handlesignout = () => {
    signOut(auth).then(() => {
      toast.success("Log Out Success");
      dispatch(removeuser());
    });
  };
  return ( 
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handlegooglogin}
          className="flex items-center gap-4 border  py-3 px-8 hover:bg-gray-300 hover:text-white rounded-md    transition-all cursor-pointer duration-300"
        >
          <AiFillGoogleCircle className="text-3xl" />
          <span className="text-sm hover:text-white text-gray-500">
            Sign in with Google
          </span>
        </div>
        <button
          onClick={handlesignout}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handlegithub}
          className="flex items-center gap-4 border  py-3 px-8 hover:bg-gray-300 hover:text-white rounded-md    transition-all cursor-pointer duration-300"
        >
          <AiFillGithub className="text-3xl" />
          <span className="text-sm hover:text-white text-gray-500">
            Sign in with Github
          </span>
        </div>
        <button
          onClick={handlesignout}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Login;
