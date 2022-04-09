import React from "react";
import "./products.css";

export default function Filters() {
  return (
    <div>
      <aside className="aside-container ">
        <div style={{ padding: "1rem" }}>
          <div className="aside-filter-clear">
            <h5>Filter</h5>
            <h5>Clear</h5>
          </div>
          <h5 className="aside-price">Price</h5>
          <div className="slider-values">
            <span>1000</span>
            <span>35500</span>
            <span>70000</span>
          </div>
          <input
            type="range"
            className="slider"
            min={1000}
            max={70000}
            defaultValue={20000}
          />
          <div>
            <h5 className="aside-price">Category</h5>
            <div className="aside-category">
              <label htmlFor="GPU">
                <input type="checkbox" name="components" id="GPU" />
                GPU
              </label>
              <label htmlFor="CPU">
                <input type="checkbox" name="Peripherals" id="CPU" />
                CPU
              </label>
              <label htmlFor="Motherboard">
                <input type="checkbox" name="Peripherals" id="Motherboard" />
                Motherboard
              </label>
            </div>
          </div>
          <div>
            <h5 className="aside-price">Rating</h5>
            <div className="aside-category">
              <label htmlFor="4-stars-&-above">
                <input type="radio" name="rating" id="4-stars-&-above" /> 4
                stars &amp; above
              </label>
              <label htmlFor="3-stars-&-above">
                <input type="radio" name="rating" id="3-stars-&-above" /> 3
                stars &amp; above
              </label>
              <label htmlFor="2-stars-&-above">
                <input type="radio" name="rating" id="2-stars-&-above" /> 2
                stars &amp; above
              </label>
              <label htmlFor="1-stars-&-above">
                <input type="radio" name="rating" id="1-stars-&-above" /> 1
                stars &amp; above
              </label>
            </div>
          </div>
          <div>
            <h5 className="aside-price">Sort by</h5>
            <div className="aside-category">
              <label htmlFor="price-low-to-high">
                <input type="radio" name="sort" id="price-low-to-high" /> Price
                - Low to High
              </label>
              <label htmlFor="price-high-to-low">
                <input type="radio" name="sort" id="price-high-to-low" /> Price
                - High to Low
              </label>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
