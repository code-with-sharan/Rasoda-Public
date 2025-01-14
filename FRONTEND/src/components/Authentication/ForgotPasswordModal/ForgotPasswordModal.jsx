import React, { useState, useContext } from "react";
import "./ForgotPasswordModal.css";
import Modal from "react-bootstrap/Modal";
import { StoreContext } from "../../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingSpinner from "../../common/loadingSpinner/LoadingSpinner";

const ForgotPasswordModal = ({
  setShowForgotPassModal,
}) => {
  const [data, setData] = useState({
    email: "",
  });
  const { BackendUrl } = useContext(StoreContext); // Backend url
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  data.email = data.email.toLowerCase()

  // updating state
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const getNewPass = async (event) => {
    event.preventDefault();
    let newUrl = BackendUrl; // backend url
    newUrl += "/api/user/forgot_password";
    setIsLoading(true);
    setIsButtonDisabled(true);

    const response = await axios.post(newUrl, data); // sending 'data' from body to backend through axios.
    if (response.data.success) {
      toast.success(response.data.message);
      setIsLoading(false);
      setIsButtonDisabled(false);
      setShowForgotPassModal(false);
    } else {
      toast.error(response.data.message);
      setIsLoading(false);
      setIsButtonDisabled(false);
    }
  };

  return (
    <Modal
      show={() => true}
      onHide={() => setShowForgotPassModal(false)}
      size="md"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Forgot Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={getNewPass}>
          <div className="modal_forg_pass">
            <p>
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            <div className="fp_input_div">
              <label htmlFor="email_input_box">Your Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
                placeholder="johnDoe@gmail.com"
                id="email_input_box"
                required
              />
            </div>
            <button type="submit" disabled={isButtonDisabled}>
            {isLoading ? <LoadingSpinner size={15} /> : "Get New Password"}
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ForgotPasswordModal;
