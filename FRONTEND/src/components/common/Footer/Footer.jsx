import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="content">
        <div className="copyRight">
          <div>© 2024 Rasoda.</div>
          <div className="All-rights-reserved">All rights reserved.</div>
        </div>
        <div className="Privacy_TOS">
          <p className="Privacy_TOS_p" onClick={() => navigate("/privacyPolicy")}>Privacy Policy</p>
          <p className="Privacy_TOS_p" onClick={() => navigate("/termsOfService")}>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
