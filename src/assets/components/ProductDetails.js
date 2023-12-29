import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = ({ products,  setProducts }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    return (
        <div className="md:container md:mx-auto min-h-[70vh]"><Link to="/products" className="text-green-500 float-right font-bold text-xl cursor-pointer">Back</Link>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex flex-col items-center justify-center p-4 col-span-2 md:col-span-1">
                    <img src={product.image} alt={product.name} className="w-96 h-96 object-cover rounded-lg" />
                </div>
                <div className="flex flex-col items-left justify-center p-4 col-span-2 md:col-span-1">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-xl font-bold mt-5">{product.category}</p>
                    <p className="text-xl font-bold">${product.price}</p>
                    <p className="text-xl">{product.description}</p>
                    <Link to={`/products/${product.id}/edit`} className="text-left text-xl text-indigo-700 font-bold mt-4">Edit</Link>
                </div>
            </div>

        </div>
    )
}
export default ProductDetails;