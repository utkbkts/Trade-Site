import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Productdata from '../api/Api'
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../redux/Shopslice';
const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");
  const [data, setData] = useState([]);
  const loadings =useSelector((state)=>state.ShopState.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoading(true));
    Productdata()
      .then((response) => {
        setData(response);
        setTimeout(() => {
          dispatch(isLoading(false)); 
        }, 1000);
      })
      .catch((error) => {
        console.error('Verileri yüklerken hata oluştu:', error);
      });
      setTimeout(() => {
        dispatch(isLoading(false)); 
      }, 1000);
  }, [dispatch]);
  return (
    <div>
    {loadings  ?( <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):( 
       <>
        <Banner/>
      <Products data={data}/>
       </>
        ) 
     }
    </div>
  )
}

export default Home