import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setshowLoginModal, setshowSignupModal }) => {
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="main_nav navbar navbar-expand-lg ">
      <div className="nav-containerr container-fluid">
        <div className="LogoAndName">
          <img className="icon-chefHat" src={assets.chefHatIcon} alt="" />
          <a className="brand_name navbar-brand" href="/">
            Rasoda
          </a>
        </div>
        {token ? (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="login-signup-btns">
            <button
              onClick={() => setshowLoginModal(true)}
              className="login-btn"
            >
              Login
            </button>
            <button
              onClick={() => setshowSignupModal(true)}
              className="btn btn-dark signup-btn"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
