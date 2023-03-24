import React from 'react';

const Button = props => {
  const { loadMoreBttn } = props;
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <button
        onClick={loadMoreBttn}
        style={{
          padding: '10px 30px',
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default Button;
