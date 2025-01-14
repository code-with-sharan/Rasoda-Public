import { ChatOpenAI } from "@langchain/openai";
import userModel from "../Models/userModel.js";

const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateRecipies = async (req, res) => {
  let { prompt } = req.body;
  const userId = req.body.userId
  const user = await userModel.findById(userId);

  const refinedPrompt = (prompt) => {
    let refinedPromptForUser = `You are an AI recipe generator assistant. You receive any one type of input from these two:

      1. Name of the Dish (e.g., Vada Pav, Poha, Chicken Biryani).
      or
      2. Context of the Dish (e.g., Dish made of chicken, garlic, pasta, Italian themed).

      Based on the input, you generate a real, existing dish recipe. 
      You always return the recipe in the form of Array of JSON object, no matter what, with the following schema:
      Interface Recipe {
        name: string;
        description: string;
        ingredients: string[];
        instructions: string[];
      }

      Here is the example for you:
      Example Input:

      Dish made of chicken, garlic, rice, Indian themed
      
      Example Output:

      [
      {
        "name": "Chicken Biryani",
        "description": "A flavorful and aromatic Indian rice dish made with marinated chicken, basmati rice, and a blend of spices.",
        "ingredients": [
          "2 cups basmati rice",
          "1 lb chicken, cut into pieces",
          "1 large onion, thinly sliced",
          "2 tomatoes, chopped",
          "1 cup yogurt",
          "2 tablespoons ginger-garlic paste",
          "2 teaspoons biryani masala",
          "1 teaspoon turmeric powder",
          "1 teaspoon red chili powder",
          "2 teaspoons garam masala",
          "4 cloves",
          "2 cardamom pods",
          "1 cinnamon stick",
          "4 cups water",
          "Salt to taste",
          "Fresh coriander and mint leaves, for garnish"
        ],
        "instructions": [
          "Rinse the basmati rice thoroughly and soak it in water for 30 minutes. Drain and set aside.",
          "In a large pot, heat some oil and fry the onions until golden brown. Remove half of the fried onions and set aside for garnishing.",
          "Add the ginger-garlic paste to the remaining onions in the pot and sauté until fragrant.",
          "Add the chicken pieces, turmeric powder, red chili powder, and salt. Cook until the chicken is browned.",
          "Stir in the chopped tomatoes and cook until they soften.",
          "Add the yogurt, biryani masala, and garam masala. Mix well and cook for a few minutes.",
          "Add the soaked and drained rice to the pot. Pour in the water and add the cloves, cardamom pods, and cinnamon stick.",
          "Bring to a boil, then reduce the heat to low. Cover the pot and let it simmer until the rice is cooked and the chicken is tender.",
          "Garnish with the reserved fried onions, fresh coriander, and mint leaves before serving."
        ]
      }
      ]

      Please provide a recipe based on the user's input: ${prompt}.
      `;

    const promptInputOutput = `
      User input: ${prompt},
      Generate output with the help of this prompt: ${refinedPromptForUser}`

    return promptInputOutput;
  };

  try {
    if (user.recipeCount < 5) {
      const response = await chatModel.invoke(refinedPrompt(prompt));
      res.json({ success: true, data: JSON.parse(response.content) });
      await userModel.findByIdAndUpdate(userId, { $inc: { recipeCount: 1 } });
    }
    else {
      return res.json({
        success: false,
        message: "Search limit exceed!",
      });
    }
  } catch (error) {
    return res.json({ success: false, message: "Please enter a valid input" });
  }
};

export default generateRecipies;
