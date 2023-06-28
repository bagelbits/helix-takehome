import React from "react";
import { Col, Container, Row } from "reactstrap";

const QuestionList = (props) => {
  const questions = props.questions;

  return (
    <Container>
      {!questions || questions.length <= 0 ? (
        <tr>
          <td colSpan="6" align="center">
            <b>Oops, no questions yet</b>
          </td>
        </tr>
      ) : (
        questions.map((question) => (
          <Row>
            <Col key={question.pk}>
              <h1>{question.title}</h1>
              <p>{question.body}</p>
              <p>Asked by:</p>
              <p>Psuedo Near Expert</p>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default QuestionList;
