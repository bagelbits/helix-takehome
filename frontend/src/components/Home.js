import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import QuestionList from "./QuestionList";
import NewQuestionModal from "./NewQuestionModal";

import axios from "axios";

import { API_URL } from "../constants";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    resetState();
  });

  const getQuestions = () => {
    axios.get(API_URL).then((res) => setQuestions(res.data));
  };
  const resetState = () => {
    getQuestions();
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <NewQuestionModal resetState={resetState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <QuestionList questions={questions} resetState={resetState} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
