import React from "react";
import "./Vegetarian.css";
import CatNavbar from "../Components/Category_Navbar/CatNavbar.jsx";
import { assets } from "../../../assets/assets.js";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Vegetarian = () => {
  return (
    <>
      <CatNavbar />
      <section className="heroPageSection">
        <div className="hpDiv">
          <div className="HP_Content">
            <h5>Vegetarian Stir-Fried Noodles</h5>
            <p>
              A delicious and nutritious vegetarian dish featuring fresh
              vegetables and flavorful noodles.
            </p>
          </div>
          <img className="HP_Img" src={assets.veg_stir_fried_noodles} alt="" />
        </div>
      </section>

      <div className="Outer-Ing-steps">
        <section className="Ing-steps">
          <div className="Ing-steps-content-div">
            <div className="Ing-steps-Ingredirents">
              <h2>Ingredients</h2>
              <ul>
                <li>8 oz. rice noodles</li>
                <li>2 tbsp. vegetable oil</li>
                <li>1 red bell pepper, sliced</li>
                <li>1 cup sliced mushrooms</li>
                <li>2 cups shredded cabbage</li>
                <li>3 cloves garlic, minced</li>
                <li>2 tbsp. soy sauce</li>
                <li>1 tbsp. rice vinegar</li>
                <li>1 tsp. sesame oil</li>
                <li>Salt and pepper to taste</li>
                <li>Chopped green onions for garnish</li>
              </ul>
            </div>
            <div className="Ing-steps-Steps">
              <h2>Steps</h2>
              <div className="Ing-steps-step">
                <h1>Step 1</h1>
                <p>
                  Soak the rice noodles in hot water for 15-20 minutes until
                  soft. Drain and set aside.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 2</h1>
                <p>
                  Heat the vegetable oil in a large skillet or wok over
                  medium-high heat. Add the bell pepper, mushrooms, and cabbage.
                  Stir-fry for 3-4 minutes until the vegetables are
                  tender-crisp.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 3</h1>
                <p>
                  Add the garlic and stir-fry for 1 minute until fragrant. Add
                  the drained noodles, soy sauce, rice vinegar, and sesame oil.
                  Toss everything together until the noodles are heated through
                  and coated in the sauce.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 4</h1>
                <p>
                  Season with salt and pepper to taste. Garnish with chopped
                  green onions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="Outer-nutrition-section">
        <section className="nutrition-section">
          <div className="nutrition-div">
            <div className="nutr-content-div">
              <h2>Nutrition Facts</h2>
              <div className="nutr-content-list">
                <div className="nutr-content">
                  <p>Calories:</p>
                  <p>350 calories</p>
                </div>
                <div className="nutr-content">
                  <p>Carbohydrates:</p>
                  <p>55g</p>
                </div>
                <div className="nutr-content">
                  <p>Protein:</p>
                  <p>8g</p>
                </div>
                <div className="nutr-content">
                  <p>Fat:</p>
                  <p>12g</p>
                </div>
                <div className="nutr-content">
                  <p>Fiber:</p>
                  <p>5g</p>
                </div>
              </div>
            </div>

            <div className="chart-div">
              <Doughnut
                data={{
                  labels: [
                    "Calories",
                    "Carbohydrates",
                    "Protein",
                    "Fat",
                    "Fiber",
                  ],
                  datasets: [
                    {
                      label: "Nutrition Facts",
                      data: [350, 55, 8, 12, 5],
                      backgroundColor: [
                        "rgb(75,192,192,0.8)",
                        "rgb(255,99,132,0.8)",
                        "rgb(255,159,64,0.8)",
                        "rgb(255,205,86,0.8)",
                        "rgb(54,162,235,0.8)",
                      ],
                      hoverOffset: 4,
                      borderRadius: 3,
                      // borderColor:
                      // [
                      //   "rgb(75,192,192,0.8)",
                      //   "rgb(255,99,132,0.8)",
                      //   "rgb(255,159,64,0.8)",
                      //   "rgb(255,205,86,0.8)",
                      //   "rgb(54,162,235,0.8)"
                      // ],
                    },
                  ],
                }}
                options={{
                  padding: "1rem",
                  // responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vegetarian;
