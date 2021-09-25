import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const previewIcon = <FontAwesomeIcon icon={faEye} />;
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return (
    <div>
      <h1>Order Summary</h1>
      <h2>
        Item Orderd:{" "}
        <span style={{ color: "blueviolet" }}>{props.cart.length}</span>
      </h2>
      <h2>Shipping: $0</h2>
      <h2>
        Grand Total: $<span style={{ color: "green" }}>{total}</span>
      </h2>
      <button className="btn-regular">{previewIcon} Preview Order</button>
    </div>
  );
};

export default Cart;
