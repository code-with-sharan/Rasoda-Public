import Navbar from "react-bootstrap/Navbar";
import "./CatNavbar.css";

function CatNavbar() {
  return (
    <Navbar className="cat-nav-navbar">
      <div className="cat-nav-container">
        <a className="cat-nav-brandName">Vegetarian</a>
        <div className="cat-nav-links">
          <a href="/">Home</a>
        </div>
      </div>
    </Navbar>
  );
}

export default CatNavbar;
