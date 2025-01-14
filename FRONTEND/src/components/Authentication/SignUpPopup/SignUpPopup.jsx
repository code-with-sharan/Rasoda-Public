import React, { useContext, useState } from "react";
import "./SignUpPopup.css";
import { StoreContext } from "../../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import LoadingSpinner from "../../common/loadingSpinner/LoadingSpinner";

const SignUpPopup = ({
  setshowSignupModal,
  setShowVerifyOtpModal,
  onSignIn,
  setEmail,
}) => {
  const { BackendUrl } = useContext(StoreContext);
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

  const onSubmitSignUp = async (event) => {
    event.preventDefault();
    let newUrl = BackendUrl;
    newUrl += "/api/user/register";
    setEmail(data.email);
    setIsLoading(true);
    setIsButtonDisabled(true);

    const response = await axios.post(newUrl, {
      email: data.email.toLowerCase(),
      password: data.password,
    });
    if (response.data.success) {
      toast.success(response.data.message);
      setIsLoading(false);
      setIsButtonDisabled(false);
      setshowSignupModal(false);
      setShowVerifyOtpModal(true);
    } else {
      toast.error(response.data.message);
      setIsLoading(false);
      setIsButtonDisabled(false);
    }
  };

  return (
    <>
      <Modal
        show={true}
        onHide={() => setshowSignupModal(false)}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmitSignUp} className="signup-popup-container">
            <div className="signup-popup-inputs">
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

            <button type="submit" disabled={isButtonDisabled}>
              {isLoading ? <LoadingSpinner size={16} /> : "Request OTP"}
            </button>

            <p className="move_to_login">
              Already have an account?{" "}
              <span onClick={() => !isLoading && onSignIn()} style={{pointerEvents: isLoading ? 'none' : 'auto', opacity: isLoading ? 0.5 : 1}}>Login here</span>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpPopup;
