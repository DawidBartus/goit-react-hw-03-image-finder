import React, { Component } from 'react';
import style from 'components/Modal/Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onEscClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onEscClose);
  }

  render() {
    const { modalIsOpen, modalAlt, onClickClose } = this.props;

    return (
      <div className={style.modal} onClick={onClickClose}>
        <div>
          <img className={style.images} src={modalIsOpen} alt={modalAlt} />
        </div>
      </div>
    );
  }
}

export default Modal;
