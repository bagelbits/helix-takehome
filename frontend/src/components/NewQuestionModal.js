import React, { useState, Fragment } from "react";
import NewQuestionForm from "./NewQuestionForm";

const NewQuestionModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      <div className="w-3/4 mx-auto py-8">
        <div className="flex justify-end items-center p-1.5">
          <button
            className="bg-indigo-500 text-white text-sm p-1.5"
            onClick={toggle}
          >
            Ask a Question
          </button>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-50 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-6 pb-3">
                  <h3 className="text-2xl font-semibold">New Question</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 pt-3 flex-auto">
                  <NewQuestionForm
                    resetState={props.resetState}
                    toggle={toggle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Fragment>
  );
};

export default NewQuestionModal;
