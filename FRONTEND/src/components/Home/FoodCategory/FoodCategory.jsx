import React, { useEffect } from "react";
import "./FoodCategory.css";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

const FoodCategory = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="outer-cat-body">
      <div className="cat-body">
        <h2 className="category_main_heading">Popular Categories</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100" onClick={() => navigate("/vegetarian")}>
              <div className="card-body">
                <h5 className="card-title">Vegetarian</h5>
                <p className="para-card-cat card-text">
                  Plant-based delights for a healthy lifestyle.
                </p>
              </div>
              <img
                src={assets.Vegetarian}
                className="img-cat card-img-bottom"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card h-100" onClick={() => navigate("/vegan")}>
              <div className="card-body">
                <h5 className="card-title">Vegan</h5>
                <p className="para-card-cat card-text">
                  Cruelty-free dishes bursting with flavor.
                </p>
              </div>
              <img
                src={assets.Vegan}
                className="img-cat card-img-bottom"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card h-100" onClick={() => navigate("/glutenFree")}>
              <div className="card-body">
                <h5 className="card-title">Gluten-Free</h5>
                <p className="para-card-cat card-text">
                  Delicious recipes free from gluten.
                </p>
              </div>
              <img
                src={assets.Gluten_Free}
                className="img-cat card-img-bottom"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card h-100" onClick={() => navigate("/keto")}>
              <div className="card-body">
                <h5 className="card-title">Keto</h5>
                <p className="para-card-cat card-text">
                  Low-carb meals for a ketogenic lifestyle.
                </p>
              </div>
              <img
                src={assets.Keto}
                className="img-cat card-img-bottom"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FoodCategory;
