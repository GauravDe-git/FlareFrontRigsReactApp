import React from "react";
import "./products.css";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div className="card">
        <img src={item.img} className="card-img" />
        <div className="card-title">{item.title}</div>
        <div className="card-mid">
          <div className="card-text">INR.{item.price} /- </div>
          <div className="rating">{item.ratings}</div>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary">
            Add to Cart
          </button>
          <button type="button" className="btn btn-primary">
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
