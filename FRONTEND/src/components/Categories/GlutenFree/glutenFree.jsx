import React from "react";
import { assets } from "../../../assets/assets";
import { Doughnut } from "react-chartjs-2";
import Navbar from "react-bootstrap/Navbar";

const Gluten_Free = () => {
  return (
    <>
      <Navbar className="cat-nav-navbar">
        <div className="cat-nav-container">
          <a className="cat-nav-brandName">Gluten Free</a>
          <div className="cat-nav-links">
            <a href="/">Home</a>
          </div>
        </div>
      </Navbar>

      <section className="heroPageSection">
        <div className="hpDiv">
          <div className="HP_Content">
            <h5>Quinoa Salad with Lemon Vinaigrette</h5>
            <p>
              A refreshing and nutritious gluten-free salad made with quinoa,
              fresh vegetables, and a tangy lemon vinaigrette.
            </p>
          </div>
          <img
            className="HP_Img"
            src={assets.Quinoa_Salad_with_Lemon_Vinaigrette}
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
                <li>1 cup quinoa, rinsed</li>
                <li>2 cups water</li>
                <li>1 cucumber, diced</li>
                <li>1 bell pepper, diced</li>
                <li>1/2 red onion, finely chopped</li>
                <li>1/2 cup cherry tomatoes, halved</li>
                <li>1/4 cup fresh parsley, chopped</li>
                <li>1/4 cup fresh mint, chopped</li>
                <li>1/4 cup olive oil</li>
                <li>2 tablespoons lemon juice</li>
                <li>1 teaspoon lemon zest</li>
                <li>1 clove garlic, minced</li>
                <li>Salt and pepper to taste</li>
              </ul>
            </div>
            <div className="Ing-steps-Steps">
              <h2>Steps</h2>
              <div className="Ing-steps-step">
                <h1>Step 1</h1>
                <p>
                  In a medium saucepan, combine the quinoa and water. Bring to a
                  boil, then reduce heat to low, cover, and simmer for 15
                  minutes or until the quinoa is cooked and water is absorbed.
                  Fluff with a fork and let it cool.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 2</h1>
                <p>
                  In a large bowl, combine the cooked quinoa, cucumber, bell
                  pepper, red onion, cherry tomatoes, parsley, and mint.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 3</h1>
                <p>
                  In a small bowl, whisk together the olive oil, lemon juice,
                  lemon zest, garlic, salt, and pepper to make the vinaigrette.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 4</h1>
                <p>
                  Drizzle the lemon vinaigrette over the quinoa salad and toss
                  to combine.
                </p>
              </div>
              <div className="Ing-steps-step">
                <h1>Step 5</h1>
                <p>Serve chilled and enjoy!</p>
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
                  <p>200 calories</p>
                </div>
                <div className="nutr-content">
                  <p>Carbohydrates:</p>
                  <p>40g</p>
                </div>
                <div className="nutr-content">
                  <p>Protein:</p>
                  <p>8g</p>
                </div>
                <div className="nutr-content">
                  <p>Fat:</p>
                  <p>5g</p>
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
                      data: [200, 40, 8, 5, 5],
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

export default Gluten_Free;
