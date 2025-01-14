import React from "react";
import "./RecipieModal.css";
import Modal from "react-bootstrap/Modal";

const RecipieModal = ({ setShowRecipieModal, recipies }) => {
  return (
    <Modal
      show={true}
      onHide={() => setShowRecipieModal(false)}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="output-modal-header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {recipies &&
            recipies.map((v, index) => {
              return <h1 className="Rec-title" key={index}>{v.name}</h1>;
            })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="output-modal-body">
        <div className="recipesContainer">
          {recipies &&
            recipies.map((v, index) => {
              return (
                <div key={index} className="cradOne">
                  <p className="Rec-desc">{v.description}</p>
                  <h2 className="ingredients-heading">Ingredients:</h2>
                  <div className="Ingredients_box">
                    <ul>
                    {v.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                    </ul>
                  </div>

                  <div className="rec-steps">
                    <ol className="list">
                      {v.instructions.map((instruction, ind) => (
                        <li key={ind}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RecipieModal;
