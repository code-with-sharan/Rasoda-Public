import React from "react";
import { assets } from "../../../assets/assets";
import { Doughnut } from "react-chartjs-2";
import Navbar from "react-bootstrap/Navbar";

const Vegan = () => {
  return (
    <>
      <Navbar className="cat-nav-navbar">
        <div className="cat-nav-container">
          <a className="cat-nav-brandName">Vegan</a>
          <div className="cat-nav-links">
            <a href="/">Home</a>
          </div>
        </div>
      </Navbar>

      <section className="heroPageSection">
        <div className="hpDiv">
          <div className="HP_Content">
            <h5>Vegan Lentil Curry</h5>
            <p>
              A delicious and hearty vegan curry made with lentils, vegetables,
              and aromatic spices.
            </p>
          </div>
          <img className="HP_Img" src={assets.Vegan_Lentil_Curry} alt="" />
        </div>
      </section>

      <div className="Outer-Ing-steps">
        <section className="Ing-steps">
          <div className="Ing-steps-content-div">
            <div className="Ing-steps-Ingredirents">
              <h2>Ingredients</h2>
              <ul>
                <li>1 cup dried lentils</li>
                <li>1 onion, diced</li>
                <li>2 cloves garlic, minced</li>
                <li>1 inch ginger, grated</li>
                <li>1 carrot, diced</li>
                <li>1 bell pepper, diced</li>
                <li>1 zucchini, diced</li>
                <li>1 can diced tomatoes</li>
                <li>1 can coconut milk</li>
                <li>2 tablespoons curry powder</li>
                <li>1 teaspoon cumin</li>
                <li>1 teaspoon turmeric</li>
                <li>1/2 teaspoon paprika</li>
                <li>Salt and pepper to taste</li>
                <li>Fresh cilantro, for garnish</li>
                <li>Cooked rice or naan, for serving</li>
              </ul>
            </div>
            <div className="Ing-steps-Steps">
              <h2>Steps</h2>
              <div className="Ing-steps-step">
                <h1>Step 1</h1>
                <p>
                  Rinse the lentils and cook them according to package
                  instructions. Set aside.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 2</h1>
                <p>
                  In a large pot, heat some oil and sauté the onion, garlic, and
                  ginger until fragrant.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 3</h1>
                <p>
                  Add the diced vegetables and cook until they begin to soften.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 4</h1>
                <p>
                  Stir in the diced tomatoes, coconut milk, curry powder, cumin,
                  turmeric, paprika, salt, and pepper.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 5</h1>
                <p>
                  Simmer the curry for about 20 minutes, or until the vegetables
                  are tender.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 6</h1>
                <p>
                  Add the cooked lentils to the pot and mix well. Cook for an
                  additional 5-10 minutes.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 7</h1>
                <p>Adjust seasonings to taste.</p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 8</h1>
                <p>
                  Serve the vegan lentil curry over cooked rice or with naan,
                  and garnish with fresh cilantro.
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
                  <p>300 calories</p>
                </div>
                <div className="nutr-content">
                  <p>Carbohydrates:</p>
                  <p>35g</p>
                </div>
                <div className="nutr-content">
                  <p>Protein:</p>
                  <p>12g</p>
                </div>
                <div className="nutr-content">
                  <p>Fat:</p>
                  <p>10g</p>
                </div>
                <div className="nutr-content">
                  <p>Fiber:</p>
                  <p>12g</p>
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
                      data: [300, 35, 12, 10, 12],
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

export default Vegan;
