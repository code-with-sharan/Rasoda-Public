import React from "react";
import { assets } from "../../../assets/assets";
import { Doughnut } from "react-chartjs-2";
import Navbar from "react-bootstrap/Navbar";

const Keto = () => {
  return (
    <>
      <Navbar className="cat-nav-navbar">
        <div className="cat-nav-container">
          <a className="cat-nav-brandName">Keto</a>
          <div className="cat-nav-links">
            <a href="/">Home</a>
          </div>
        </div>
      </Navbar>

      <section className="heroPageSection">
        <div className="hpDiv">
          <div className="HP_Content">
            <h5>Keto Cauliflower Mac and Cheese</h5>
            <p>
              A low-carb twist on the classic mac and cheese using cauliflower
              in place of pasta, perfect for those following a keto diet.
            </p>
          </div>
          <img
            className="HP_Img"
            src={assets.Keto_Cauliflower_Mac_and_Cheese}
            alt=""
          />
        </div>
      </section>

      <div className="Outer-Ing-steps">
        <section className="Ing-steps">
          <div className="Ing-steps-content-div">
            <div className="Ing-steps-Ingredirents">
              <h2>Ingredients</h2>
              <ul>
                <li>1 medium head of cauliflower, cut into florets</li>
                <li>2 cups shredded cheddar cheese</li>
                <li>1/2 cup heavy cream</li>
                <li>2 tablespoons cream cheese</li>
                <li>1/2 teaspoon garlic powder</li>
                <li>1/2 teaspoon onion powder</li>
                <li>Salt and pepper to taste</li>
                <li>Chopped parsley for garnish</li>
              </ul>
            </div>
            <div className="Ing-steps-Steps">
              <h2>Steps</h2>
              <div className="Ing-steps-step">
                <h1>Step 1</h1>
                <p>
                  Preheat the oven to 375°F (190°C) and grease a baking dish.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 2</h1>
                <p>
                  Steam the cauliflower florets until slightly tender, then
                  drain well and pat dry with paper towels.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 3</h1>
                <p>
                  In a saucepan, heat the heavy cream and cream cheese over low
                  heat until smooth.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 4</h1>
                <p>
                  Stir in the cheddar cheese, garlic powder, onion powder, salt,
                  and pepper until the cheese is melted and the sauce is smooth.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 5</h1>
                <p>
                  Add the cauliflower to the cheese sauce and mix until well
                  coated.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 6</h1>
                <p>
                  Transfer the cauliflower and cheese mixture to the baking dish
                  and bake for about 15-20 minutes until bubbly and slightly
                  golden on top.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 7</h1>
                <p>Garnish with chopped parsley before serving.</p>
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
                  <p>400 calories</p>
                </div>
                <div className="nutr-content">
                  <p>Carbohydrates:</p>
                  <p>8g</p>
                </div>
                <div className="nutr-content">
                  <p>Protein:</p>
                  <p>18g</p>
                </div>
                <div className="nutr-content">
                  <p>Fat:</p>
                  <p>25g</p>
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
                      data: [400, 8, 18, 25, 5],
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
                  responsive: true,
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

export default Keto;
