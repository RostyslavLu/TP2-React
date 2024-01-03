import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductDetails = ({ products, onDelete, setShowAddProduct }) => {
    useEffect(() => {
        setShowAddProduct(false);
    }, [setShowAddProduct]);
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    const navigate = useNavigate();
    return (
        <div className="md:container md:mx-auto min-h-[70vh]">
            <Link to="/products" className="float-right font-bold text-xl cursor-pointer">Back to products</Link>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex flex-col items-center justify-center p-4 col-span-2 md:col-span-1">
                    <img src={product.image} alt={product.name} className="w-96 h-96 object-cover rounded-lg" />
                </div>
                <div className="flex flex-col items-left justify-center p-4 col-span-2 md:col-span-1">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-xl font-bold mt-5">{product.category}</p>
                    <p className="text-xl font-bold">${product.price}</p>
                    <p className="text-xl">{product.description}</p>
                    <div className="flex flex-row justify-start gap-10">
                        <Link to={`/products/${product.id}/edit`} className="text-indigo-700 text-xl float-left font-bold cursor-pointer mt-5 border border-indigo-500 px-16 py-2 rounded-full hover:text-white hover:bg-indigo-700">Edit</Link>
                        <button className="text-red-500 text-xl float-right font-bold cursor-pointer mt-5 border border-red-500 px-16 py-2 rounded-full hover:text-white hover:bg-red-500" onClick={()=>onDelete(product.id, navigate('/products'))}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;