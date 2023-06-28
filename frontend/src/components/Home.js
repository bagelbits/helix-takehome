import React, { useState, useEffect } from "react";
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
    <div className=" bg-gray-100 min-h-screen">
      <div>
        <NewQuestionModal resetState={resetState} />
      </div>
      <div>
        <QuestionList questions={questions} resetState={resetState} />
      </div>
    </div>
  );
};

export default Home;
