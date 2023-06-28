import React, { useState, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewQuestionForm from "./NewQuestionForm";

const NewQuestionModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Fragment>
      <Button color="primary" onClick={toggle}>
        Ask a Question
      </Button>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>New Question</ModalHeader>

        <ModalBody>
          <NewQuestionForm resetState={props.resetState} toggle={toggle} />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default NewQuestionModal;
