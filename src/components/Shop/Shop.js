import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`./products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-conatiner">
      <div className="product-side">
        <h1>Total Products: {products.length}</h1>
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.key}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="product-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
