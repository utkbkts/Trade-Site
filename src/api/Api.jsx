import axios from "axios";

const Productdata = async () => {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;
};
export default Productdata;
