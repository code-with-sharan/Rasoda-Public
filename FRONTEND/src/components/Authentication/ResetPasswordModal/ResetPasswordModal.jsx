import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPasswordModal.css";
import Modal from "react-bootstrap/Modal";
import { StoreContext } from "../../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingSpinner from "../../common/loadingSpinner/LoadingSpinner";

const ResetPasswordModal = ({ setShowResetPassModal }) => {
  const [data, setData] = useState({
    new_pass: "",
    confirm_new_pass: "",
  });
  const { BackendUrl } = useContext(StoreContext); // Backend url
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // updating state
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const resetPass = async (event) => {
    event.preventDefault();
    const token = window.location.pathname.split("/")[2];
    const newUrl = `${BackendUrl}/api/user/reset_password/${token}`;
    setIsLoading(true);
    setIsButtonDisabled(true);

    if (data.new_pass !== data.confirm_new_pass) {
      alert("Passwords do not match!");
      return;
    }

    const response = await axios.post(newUrl, { password: data.new_pass }); // sending 'data' from body to backend through axios.
    if (response.data.success) {
      toast.success(response.data.message);
      setIsButtonDisabled(false);
      setIsLoading(false);
      setShowResetPassModal(false);
      navigate("/");
    } else {
      toast.error(response.data.message);
      setIsButtonDisabled(false);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      show={() => true}
      onHide={() => setShowResetPassModal(false)}
      size="md"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter New Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={resetPass}>
          <div className="modal_reset_pass">
            <p>
              Hint: The password should be at least eight characters long. To
              make it stronger, use upper and lower case letters, numbers, and
              symbols like ! " ? $ % ^ & ).
            </p>
            <div className="reset_input_divs">
              <div className="reset_input_div">
                <label htmlFor="new_pass_input_box">New Password</label>
                <input
                  name="new_pass"
                  value={data.new_pass}
                  type="text"
                  placeholder="johnDoe@gmail.com"
                  id="new_pass_input_box"
                  required
                  onChange={onChangeHandler}
                />
              </div>

              <div className="reset_input_div">
                <label htmlFor="Cnew_pass_input_box">
                  Confirm New Password
                </label>
                <input
                  name="confirm_new_pass"
                  value={data.confirm_new_pass}
                  type="text"
                  placeholder="johnDoe@gmail.com"
                  id="Cnew_pass_input_box"
                  required
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <button type="submit" disabled={isButtonDisabled}>
            {isLoading ? <LoadingSpinner size={15} /> : "Reset Password"}
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPasswordModal;
