import { useState } from 'react';

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('https://via.placeholder.com/300x300');
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        onAdd({name, description, price, category, image});

        setName('');
        setDescription('');
        setPrice(0);
        setCategory('');
        setImage('https://via.placeholder.com/300x300');
    }
    return (
        
        <form className="w-2/3" onSubmit={onSubmit}>
            <h1 className="text-3xl font-bold text-center">Add Product</h1>
            <div className="form-control flex flex-col">
                <label className="mt-2">Name</label>
                <input className="border p-1" type="text" placeholder="Ajouter un nom" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Description</label>
                <textarea className="border p-1" value={description} placeholder="Ajouter un description" rows={4} onChange={(e)=>setDescription(e.target.value)}>{description}</textarea>
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Price</label>
                <input className="border p-1" type="number" placeholder="Ajouter un prix" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Category</label>
                <input className="border p-1" type="text" placeholder="Ajouter une catégorie" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Image</label>
                <input className=" border p-1" type="text" placeholder="Ajouter une image" value={image} onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <input type="submit" value="Save" className="btn btn-green btn-block text-lg font-bold text-indigo-700 mt-4 cursor-pointer" />
        </form>
    )
}
export default AddProduct;