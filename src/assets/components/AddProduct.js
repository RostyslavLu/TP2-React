import { useState } from 'react';

const AddProduct = ({ onAdd }) => {

    const [errors, setErrors] = useState({});

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('https://via.placeholder.com/300x300');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleImageChange = (e) => {
        setImage(e.target.value);
    }

    const validateForm = () => {
        let formErrors = {};
        if (!name) {
            formErrors.name = 'Name is required';
        }
        if (!description) {
            formErrors.description = 'Description is required';
        }
        if (!price) {
            formErrors.price = 'Price is required';
        }
        if (!category) {
            formErrors.category = 'Category is required';
        }
        if (!image) {
            formErrors.image = 'Image is required';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAdd({ name, description, price, category, image });

            setName('');
            setDescription('');
            setPrice(0);
            setCategory('');
            setImage('https://via.placeholder.com/300x300');
        }
    }

    return (
        <form className="w-2/3" onSubmit={onSubmit}>
            <div className="form-control flex flex-col">
                <label className="mt-2">Name</label>
                <input className="border p-1 focus:bg-indigo-50" type="text" placeholder="name of the product" value={name} onChange={handleNameChange} />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Description</label>
                <textarea className="border p-1 focus:bg-indigo-50" value={description} placeholder="description of the product" rows={4} onChange={handleDescriptionChange}>{description}</textarea>
                {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Price</label>
                <input className="border p-1 focus:bg-indigo-50" type="number" placeholder="price of the product" value={price} onChange={handlePriceChange} />
                {errors.price && <p className="text-red-500 text-xs italic">{errors.price}</p>}
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Category</label>
                <input className="border p-1 focus:bg-indigo-50" type="text" placeholder="category of the product" value={category} onChange={handleCategoryChange} />
                {errors.category && <p className="text-red-500 text-xs italic">{errors.category}</p>}
            </div>
            <div className="form-control flex flex-col">
                <label className="mt-2">Image</label>
                <input className=" border p-1 focus:bg-indigo-50" type="text" placeholder="image of the product" value={image} onChange={handleImageChange} />
                {errors.image && <p className="text-red-500 text-xs italic">{errors.image}</p>}
            </div>
            <input type="submit" value="Save" className="text-indigo-700 text-sm float-left font-bold cursor-pointer mt-5 border border-indigo-500 px-10 py-2 rounded-full hover:text-white hover:bg-indigo-700" />
        </form>

    )
}
export default AddProduct;