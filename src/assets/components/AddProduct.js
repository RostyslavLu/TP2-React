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
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Nom</label>
                <input className="m-2" type="text" placeholder="Ajouter un nom" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Description</label>
                <input className="m-2" type="text" placeholder="Ajouter une description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input className="m-2" type="number" placeholder="Ajouter un prix" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <input className="m-2" type="text" placeholder="Ajouter une catégorie" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Image</label>
                <input className="m-2" type="text" placeholder="Ajouter une image" value={image} onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <input type="submit" value="Enregistrer" className="btn btn-green btn-block text-lg font-bold text-indigo-700 mt-4 cursor-pointer" />
        </form>
    )
}
export default AddProduct;