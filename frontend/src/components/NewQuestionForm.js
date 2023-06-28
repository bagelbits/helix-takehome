import React, { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="border-2 border-gray-300 bg-white h-10 pl-2.5 w-full text-sm focus:outline-none"
          type="text"
          name="title"
          placeholder="Enter the question title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="block border-2 border-gray-300 bg-white h-40 p-2.5 w-full text-sm focus:outline-none resize-none"
          name="body"
          placeholder="Write your question here"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <button
          className="rounded-full bg-violet-400 hover:bg-violet-300 text-sm w-14 h-6 text-white font-bold"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default NewQuestionForm;
