import React from "react";
import userImg from "../assets/user.png";

const QuestionList = (props) => {
  const questions = props.questions;
  return (
    <div className="justify-center items-center flex flex-col">
      {!questions || questions.length <= 0 ? (
        <div>
          <b>Oops, no questions yet</b>
        </div>
      ) : (
        questions.map((question) => (
          <div
            className="bg-white border-1 border-gray-100 rounded-lg w-3/4 m-3 p-4"
            key={question.pk}
          >
            <div className="mb-2">
              <p className="font-bold">{question.title}</p>
            </div>
            <div className="">
              <p className="max-w-prose">{question.body}</p>
            </div>
            <div className="flex-grow border-t border-gray-100 my-4"></div>
            <p className="font-bold text-sm">Asked by:</p>
            <div className="flex justify-start items-center">
              <img className="p-2" src={userImg} alt="User" />
              <p className="text-indigo-500 font-bold">Psuedo Near Expert</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QuestionList;
