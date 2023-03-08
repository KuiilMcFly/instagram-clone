import React from "react";

const ModalComments = ({ setIsOpen }) => {
  return (
    <div className="modalComments">
      <button onClick={() => setIsOpen(false)}>X</button>
      commenti bla bla ciao
    </div>
  );
};

export default ModalComments;
