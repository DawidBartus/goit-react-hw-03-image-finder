import React from 'react';

const Button = props => {
  const { loadMoreBttn } = props;
  return <button onClick={loadMoreBttn}>Load more</button>;
};

export default Button;
