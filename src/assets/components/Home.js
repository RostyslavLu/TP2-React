import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = ({setShowAddProduct}) => {
  useEffect(() => {
    setShowAddProduct(false);
  }, [setShowAddProduct]);
  return (
    <div className="flex flex-col items-center min-h-[70vh]">
      <h1 className="text-3xl font-bold">Bienvenue sur notre boutique en ligne!</h1>
      <div className="flex flex-row items-center gap-10 min-h-40">
        <Link to="/products" className="flex-1 min-w-60 text-center text-3xl text-white font-bold bg-indigo-700 rounded p-3 hover:bg-white hover:text-indigo-700 transition ease-in-out delay-150 duration-300">Products</Link>
        <Link to="/about" className="flex-1 min-w-60 text-center text-3xl text-white font-bold bg-indigo-700 rounded p-3 hover:bg-white hover:text-indigo-700 transition ease-in-out delay-150 duration-300">About</Link>
      </div>
    </div>
  );
};
export default Home;