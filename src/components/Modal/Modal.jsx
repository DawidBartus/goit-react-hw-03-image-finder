import React from 'react';

const Modal = props => {
  const { isOpen } = props;
  console.log(isOpen);
  return (
    <div className="overlay">
      <div className="modal">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
