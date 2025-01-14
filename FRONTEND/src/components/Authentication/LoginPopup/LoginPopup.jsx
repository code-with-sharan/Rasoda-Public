import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { StoreContext } from "../../Context/Context";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import LoadingSpinner from "../../common/loadingSpinner/LoadingSpinner";

const LoginPopup = ({
  setshowLoginModal,
  onSignUp,
  onForgotPass,
  setShowVerifyOtpModal,
}) => {
  const { BackendUrl, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // updating state
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    let newUrl = BackendUrl; // backend url
    newUrl += "/api/user/login";
    data.email = data.email.toLowerCase();
    setIsLoading(true);
    setIsButtonDisabled(true);

    const response = await axios.post(newUrl, data); // sending 'data' from body to backend through axios.
    if (response.data.success) {
      setIsLoading(false);
      setIsButtonDisabled(false);
      setToken(response.data.token); // backend se token generate ho k mila.
      localStorage.setItem("token", response.data.token); // saving the token in local storage
      setshowLoginModal(false); // setshowLoginModal ko false krenge, tabhi to loginPopup screen se hatega login/create account pe click krne se.
    } else {
      // use case if isEmailVerified is false and user is registered in DB
      if (response.data.verificationStatus == false) {
        setshowLoginModal(false);
        setShowVerifyOtpModal(true);

        let newUrl = BackendUrl;
        newUrl += "/api/user/verifyEmailOtp";
        setIsLoading(true); // verify this loader when this case is handled
        setIsButtonDisabled(true); // verify this loader when this case is handled

        const response = await axios.post(newUrl, { otp: data.otp, email: data.email });
        if (response.data.success) {
          setIsLoading(false); // verify this loader when this case is handled
          setIsButtonDisabled(false); // verify this loader when this case is handled
          setShowVerifyOtpModal(false);
          toast.success(response.data.message);
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
          setIsLoading(false); // verify this loader when this case is handled
          setIsButtonDisabled(false); // verify this loader when this case is handled
        }
      }
      toast.error(response.data.message);
      setIsLoading(false);
      setIsButtonDisabled(false);
    }
  };

  return (
    <Modal
      show={true}
      onHide={() => setshowLoginModal(false)}
      size="md"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmitLogin} className="login-popup-container">
          <div className="login-popup-inputs">
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              placeholder="Your email"
              required
            />
            <input
              type="password"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              placeholder="Password"
              required
            />
          </div>

          <div className="login-popup-footer-items">
            <div className="login-popup-condition">
              <input id="check_box" type="checkbox" required />
              <label htmlFor="check_box">
                By continuing, I agree to the terms of use & privacy policy
              </label>
            </div>

            <button type="submit" disabled={isButtonDisabled}>
            {isLoading ? <LoadingSpinner size={15}/> : "Login"}
            </button>

            <p className="create_new_acc">
              Create a new account?{" "}
              <span onClick={() => !isLoading && onSignUp()} style={{pointerEvents: isLoading ? 'none' : 'auto', opacity: isLoading ? 0.5 : 1}}>Click here</span>
            </p>

            <p className="forgot_pass">
              <span onClick={() => !isLoading && onForgotPass()} style={{pointerEvents: isLoading ? 'none' : 'auto', opacity: isLoading ? 0.5 : 1}}>Forgot Password?</span>
            </p>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginPopup;
