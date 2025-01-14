import { createContext, useState, useEffect } from "react";
// export const BackendUrl = "http://localhost:9000"
export const BackendUrl = "https://rasoda-ai-recipie-generator.onrender.com"

const StoreContext = createContext(null); // creating context with null value.

const StoreContextProvider = (props) => {
  const [token, setToken] = useState(""); // state for storing token

  // stay logged in:
  useEffect(() => {
    async function loadData() {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    loadData();
  }, []); // Run only once. jabb bhi component mount (render) krega, loadData() function chalega.

  const contextValue = {
    // we can access the elements of "contextValue" in any component using the context.
    BackendUrl,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreContextProvider;
