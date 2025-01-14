import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/common/Navbar/Navbar.jsx";
import SearchPage from "./components/Home/SearchPage/SearchPage.jsx";
import FoodCategory from "./components/Home/FoodCategory/FoodCategory";
import Footer from "./components/common/Footer/Footer.jsx";
import { useState } from "react";
import LoginPopup from "./components/Authentication/LoginPopup/LoginPopup.jsx";
import SignUpPopup from "./components/Authentication/SignUpPopup/SignUpPopup.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPasswordModal from "./components/Authentication/ForgotPasswordModal/ForgotPasswordModal.jsx";
import ResetPasswordModal from "./components/Authentication/ResetPasswordModal/ResetPasswordModal.jsx";
import { Route, Routes } from "react-router-dom";
import Vegetarian from "./components/Categories/Vegetarian/Vegetarian.jsx";
import Vegan from "./components/Categories/Vegan/Vegan.jsx";
import Gluten_Free from "./components/Categories/GlutenFree/glutenFree.jsx";
import Keto from "./components/Categories/Keto/keto.jsx";
import Privacy_policy from "./components/Legal/Privacy_Policy/Privacy_policy.jsx";
import TermsOfSevice from "./components/Legal/TermsOfSevice/TermsOfSevice.jsx";
import VerifyOtpModal from "./components/Authentication/VerifyOtpModal/VerifyOtpModal.jsx";
import useScrollToTop from "./components/common/srollToTop/scrollToTop.jsx";

function App() {
  useScrollToTop();
  const [showLoginModal, setshowLoginModal] = useState(false);
  const [showSignupModal, setshowSignupModal] = useState(false);
  const [showForgotPassModal, setShowForgotPassModal] = useState(false);
  const [showResetPassModal, setShowResetPassModal] = useState(false);
  const [showVerifyOtpModal, setShowVerifyOtpModal] = useState(false)
  const [email, setEmail] = useState(""); 

  return (
    <>
      <ToastContainer />
      {showLoginModal && (
        <LoginPopup
          setshowLoginModal={setshowLoginModal}
          setShowForgotPassModal={setShowForgotPassModal}
          setShowVerifyOtpModal={setShowVerifyOtpModal}
          onSignUp={() => {
            // used to shift to Signup popup
            setshowLoginModal(false);
            setshowSignupModal(true);
          }}
          onForgotPass={() => {
            setshowLoginModal(false); // close login modal
            setShowForgotPassModal(true); // open forgot pass modal
          }}
        />
      )}

      {showForgotPassModal && (
        <ForgotPasswordModal
          setShowForgotPassModal={setShowForgotPassModal}
        />
      )}

      {showSignupModal && (
        <SignUpPopup
          setshowSignupModal={setshowSignupModal}
          setShowVerifyOtpModal = {setShowVerifyOtpModal} 
          setEmail={setEmail}
          onSignIn={() => {
            // used to shift to login popup
            setshowSignupModal(false); // close signup modal
            setshowLoginModal(true); // open login modal
          }}
        />
      )}

      {showVerifyOtpModal &&
        <VerifyOtpModal email={email} setShowVerifyOtpModal={setShowVerifyOtpModal} />}

      <Routes>
        <Route
          path="/reset_password/:token"
          element={
            <>
              <ResetPasswordModal
                setShowForgotPassModal={setShowForgotPassModal}
                setShowResetPassModal={setShowResetPassModal}
              />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar
                setshowLoginModal={setshowLoginModal}
                setshowSignupModal={setshowSignupModal}
              />
              <SearchPage setshowLoginModal={setshowLoginModal} />
              <FoodCategory />
              <Footer />
            </>
          }
        />
        <Route
          path="/vegetarian"
          element={
            <>
              <Vegetarian />
              <Footer />
            </>
          }
        />
        <Route
          path="/vegan"
          element={
            <>
              <Vegan />
              <Footer />
            </>
          }
        />
        <Route
          path="/glutenFree"
          element={
            <>
              <Gluten_Free />
              <Footer />
            </>
          }
        />
        <Route
          path="/keto"
          element={
            <>
              <Keto />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacyPolicy"
          element={
            <>
              <Navbar
                setshowLoginModal={setshowLoginModal}
                setshowSignupModal={setshowSignupModal}
              />
              <Privacy_policy />
            </>
          }
        />
        <Route
          path="/termsOfService"
          element={
            <>
              <Navbar
                setshowLoginModal={setshowLoginModal}
                setshowSignupModal={setshowSignupModal}
              />
              <TermsOfSevice />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
