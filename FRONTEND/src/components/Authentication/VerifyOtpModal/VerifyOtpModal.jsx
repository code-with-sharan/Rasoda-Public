import React, { useContext, useState } from "react";
import "./VerifyOtpModal.css";
import Modal from "react-bootstrap/Modal";
import { StoreContext } from "../../Context/Context";
import { toast } from "react-toastify";
import axios from "axios";
import LoadingSpinner from "../../common/loadingSpinner/LoadingSpinner";

const VerifyOtpModal = ({ email, setShowVerifyOtpModal }) => {
  const { BackendUrl, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  email = email.toLowerCase();

  // updating state
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitVerifyOtp = async (event) => {
    event.preventDefault();
    let newUrl = BackendUrl;
    newUrl += "/api/user/verifyEmailOtp";
    setIsLoading(true);
    setIsButtonDisabled(true);

    const response = await axios.post(newUrl, { otp: data.otp, email });
    if (response.data.success) {
      setShowVerifyOtpModal(false);
      toast.success(response.data.message);
      setIsLoading(false);
      setIsButtonDisabled(false);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
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
        onHide={() => setShowVerifyOtpModal(false)}
        size="md"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Verify OTP
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmitVerifyOtp} className="signup-popup-container">
            <div className="signup-popup-inputs">
              <input
                type="text"
                name="otp"
                onChange={onChangeHandler}
                value={data.otp}
                placeholder="Enter OTP"
                required
              />
            </div>

            <button type="submit" disabled={isButtonDisabled}>
              {isLoading ? <LoadingSpinner size={16} /> : "Submit"}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VerifyOtpModal;
