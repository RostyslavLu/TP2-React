import Products from './assets/components/Products';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import About from './assets/components/About';
import Home from './assets/components/Home';
import EditProduct from './assets/components/EditProduct';
import ElementAdd from './assets/components/ElementAdd';
import ProductDetails from './assets/components/ProductDetails';
import AddProduct from './assets/components/AddProduct';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const [products, setProducts] = useState([
  ]);

  const fetchProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts('http://localhost:5000/products');
      setProducts(productsFromServer);
    }
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter((product) => product.id !== id));
  }

  const addProduct = async (product) => {
    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    setProducts([...products, data]);
  }

  const editProduct = async (product) => {
    const response = await fetch(`http://localhost:5000/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log('Edited product:', data);
    setProducts(products.map((product) => product.id === data.id ? data : product));
  }

  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <ElementAdd toggleAdd={()=> setShowAddProduct(!showAddProduct)} showAdd={showAddProduct} />
        <div className='flex justify-center'>{ showAddProduct && <AddProduct onAdd={addProduct} />}</div>
        <Routes>
          <Route path="/" element={<Home setShowAddProduct={setShowAddProduct} />} />
          <Route path="/products" element={<Products products={products} onAdd={addProduct} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} onDelete={deleteProduct} setShowAddProduct={setShowAddProduct} />} />
          <Route path="/products/:id/edit" element={<EditProduct products={products} onEdit={editProduct} setShowAddProduct={setShowAddProduct} />} />
          <Route path="/about" element={<About setShowAddProduct={setShowAddProduct} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}