import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>400</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/71N-xsXm2mL._AC_UY218_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
