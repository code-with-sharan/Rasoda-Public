import React, { useEffect, useRef, useState, useContext } from "react";
import "./SearchPage.css";
import Typed from "typed.js";
import axios from "axios";
import { StoreContext } from "../../Context/Context";
import RecipieModal from "../RecipieModal/RecipieModal";
import LoadingSpinner from "../../common/loadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";

const SearchPage = ({ setshowLoginModal }) => {
  const inputRef = useRef(null);
  const { BackendUrl, token } = useContext(StoreContext); // Backend url

  const [prompt, setPrompt] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [showRecipieModal, setShowRecipieModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  async function onSubmit(event) {
      // Call API to backend
      event.preventDefault();
      const newUrl = `${BackendUrl}/api/recipie/generate_recipie`;
      setIsLoading(true);
      setIsButtonDisabled(true);
      const r = await axios.post(newUrl, { prompt }, {headers:{token}});
      if (r.data.success) {
        setRecipies(r.data.data);
        setShowRecipieModal(true);
        setPrompt("");
        setIsLoading(false);
        setIsButtonDisabled(false);
      } else {
        setPrompt("");
        setIsLoading(false);
        setIsButtonDisabled(false);
        toast.error(r.data.message)
        if(r.data.message == "Search limit exceed!"){
          setIsButtonDisabled(true);
        }
      }
  }

  const loginModalshow = (event) => {
    event.preventDefault();
    setshowLoginModal(true);
  };

  useEffect(() => {
    const options = {
      strings: [
        "What's in your fridge?",
        "Type an ingredient...",
        "Hungry? Let's find a recipe!",
        "Craving something specific?",
        "Enter a cuisine or dish name...",
        "Need dinner ideas?",
        "Got a taste for something special?",
        "Looking for a quick meal?",
        "Tell me what you have...",
        "Feeling adventurous?",
        "What do you want to cook today?",
        "Enter your favorite ingredient...",
        "What's your mood food?",
        "Let's get cooking!",
        "What are you in the mood for?",
        "Fancy something spicy?",
        "What's your secret ingredient?",
        "What's on the menu today?",
        "Need a healthy option?",
        "Searching for a sweet treat?",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      attr: "placeholder",
      loop: true,
    };

    // Ensure inputRef.current is not null before initializing Typed.js
    if (inputRef.current) {
      const typed = new Typed(inputRef.current, options);

      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <form onSubmit={!token ? loginModalshow : onSubmit}>
        <div className="searchContainer">
          <h1 className="heaing_searchPage">
            Discover Delicious Recipes with the Power of AI
          </h1>
          <p className="para_searchPage">
            Unleash your culinary creativity with our AI-powered recipe
            generator. Explore a world of flavors tailored to your preferences
            and dietary needs.
          </p>
          <div className="searchInput">
            <input
              className="input_search"
              ref={inputRef}
              type="text"
              placeholder=""
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-dark search-submit-btn"
              disabled={isButtonDisabled}
            >
              {isLoading ? <LoadingSpinner size={24}/> : "Generate idea!"}
            </button>
          </div>
        </div>
      </form>
      {showRecipieModal && (
        <RecipieModal
          setShowRecipieModal={setShowRecipieModal}
          recipies={recipies}
        />
      )}
    </>
  );
};

export default SearchPage;
