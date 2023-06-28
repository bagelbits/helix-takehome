import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import axios from "axios";

import { API_URL } from "../constants";

const NewQuestionForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL, { title, body }).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="title"
          placeholder="Enter the question title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="body"
          placeholder="Write your question here"
          onChange={(e) => setBody(e.target.value)}
        />
      </FormGroup>
      <Input className="submitButton" type="submit" value="Post" />
    </Form>
  );
};

export default NewQuestionForm;
