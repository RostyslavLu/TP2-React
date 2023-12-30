import  { FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
    return (
        <div className="flex flex-row p-2 gap-3 hover:scale-105 duration-300">
            <picture className="flex-4">
                <img src={product.image} alt={product.name} />
            </picture>
            <div className="flex-3 w-full">
                <h3 className="font-bold text-lg" >{product.name}</h3>
                <p className="font-bold text-lg">${product.price}</p>
                <p className="text-sm">{product.category}</p>
                <Link to={`/products/${product.id}`} className="text-indigo-700 float-left font-bold cursor-pointer">Details</Link>
            </div>
        </div>
    )
}
export default SingleProduct;