import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  const { name, price, seller, img, star, stock } = props.product;
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>By: {seller}</p>
        <p>Rating Star: {star}</p>
        <p>Only {stock} left in stock</p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          {element} Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
