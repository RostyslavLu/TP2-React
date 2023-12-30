import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const EditProduct = ({ products, onEdit }) => {
    const { id } = useParams();
    const productId = Number(id);
    const navigate = useNavigate();
  
    const product = products.find((product) => product.id === productId);
  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
  
    useEffect(() => {

      if (product) {
        setName(product.name || '');
        setDescription(product.description || '');
        setPrice(product.price || '');
        setCategory(product.category || '');
        setImage(product.image || '');
      }
    }, [product]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      onEdit({ id: productId, name, description, price, category, image });
        navigate('/products');
    };
    return (
        <div className="md:container md:mx-auto min-h-[70vh]">
            {/* https://reactrouter.com/en/main/components/link */}
            <Link to=".." className="float-right font-bold text-xl cursor-pointer" relative='path'>Back to details</Link>

                <div className="flex flex-col items-left justify-center p-4 col-span-2 md:col-span-1">
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-bold text-gray-700">Name</label>
                            <input className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-indigo-50" name='name' type="text" placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-bold text-gray-700">Description</label>
                            <textarea className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-indigo-50" rows="5" placeholder="Product description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-bold text-gray-700">Price</label>
                            <input className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-indigo-50" type="number" placeholder="Product price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-bold text-gray-700">Category</label>
                            <input className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-indigo-50" type="text" placeholder="Product category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-bold text-gray-700">Image</label>
                            <input className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:bg-indigo-50" type="text" placeholder="Product image" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-16 py-2 font-bold border border-green-500 text-green-500 rounded-full hover:text-white hover:bg-green-500 focus:outline-none focus:shadow-outline" type="submit">Update</button>
                        </div>
                    </form>
                </div>

        </div>
    )
};

export default EditProduct;