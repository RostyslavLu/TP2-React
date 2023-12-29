import Products from './assets/components/Products';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import About from './assets/components/About';
import Home from './assets/components/Home';
import EditProduct from './assets/components/EditProduct';
import ProductDetails from './assets/components/ProductDetails';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Product 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 100,
      "category": "Category 1",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 2,
      "name": "Product 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 200,
      "category": "Category 2",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 3,
      "name": "Product 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 300,
      "category": "Category 3",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 4,
      "name": "Product 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 400,
      "category": "Category 4",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 5,
      "name": "Product 5",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 500,
      "category": "Category 5",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 6,
      "name": "Product 6",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 600,
      "category": "Category 6",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 7,
      "name": "Product 7",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 700,
      "category": "Category 7",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 8,
      "name": "Product 8",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 800,
      "category": "Category 8",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 9,
      "name": "Product 9",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 900,
      "category": "Category 9",
      "image": 'https://via.placeholder.com/300x300'
    },
    {
      "id": 10,
      "name": "Product 10",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": 1000,
      "category": "Category 10",
      "image": 'https://via.placeholder.com/300x300'
    }
  ]);

  const deleteProduct = async (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }
  const addProduct = (product) => {
    const lastId = products.length > 0 ? products[products.length - 1].id : 0
    const id = lastId + 1
    const newProduct = { id, ...product }
    setProducts([...products, newProduct])
  }


  const editProduct = (updatedProduct) => {
    setProducts(products.map((product) => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  }
  return (
    <BrowserRouter >
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} onAdd={addProduct} onEdit={editProduct} onDelete={deleteProduct} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} onDelete={deleteProduct} />} />
          <Route path="/products/:id/edit" element={<EditProduct products={products} onEdit={editProduct} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}