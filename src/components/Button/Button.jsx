import React from 'react';
import style from 'components/Button/Button.module.css';

const Button = props => {
  const { loadMoreBttn } = props;
  return (
    <div className={style.bttnHolder}>
      <button onClick={loadMoreBttn} className={style.bttnLoader}>
        Load more
      </button>
    </div>
  );
};

export default Button;
