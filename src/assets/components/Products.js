import AddProduct from "./AddProduct";
import SingleProduct from "./SingleProduct";

const Products = ({ products, onAdd }) => {

    return (
        <div className="md:container md:mx-auto min-h-[70vh]">
            <div className="grid grid-cols-3 gap-4 p-4 mt-20">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                        <SingleProduct product={product} />
                      </div> 
                    ))
                ) : (
                    <div className="p-4 mb-4 text-sm text-center text-red-800 rounded-lg bg-red-50 font-bold col-span-2">Empty list</div>
                )}

            </div>
        </div>
    )
}
export default Products;