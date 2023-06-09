import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

const KEY = '14551273-a2f87cd1c4bb2f6c327ac1a47';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    modalIsOpen: [],
    modalAlt: '',
    error: null,
    page: 1,
    total: '',
    text: '',
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const imageText = e.target.elements.searchInput.value;
  //   const link = `https://pixabay.com/api/?q=${imageText}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  //   const request = await fetch(link);
  //   const respons = await request.json();
  //   this.setState({ images: respons.hits });
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ images: [], page: 1, isLoading: true });
    const imageText = e.target.elements.searchInput.value;
    this.setState({ text: imageText }, () => {
      this.fetchdata();
    });
  };
  // toggleIsLoadeState = () => {
  //   this.setState(isLoading => ({ isLoading: !isLoading }));
  //   console.log('im updated', this.state.isLoading);
  // };

  fetchdata = async () => {
    const link = `https://pixabay.com/api/?q=${this.state.text}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&height=250`;
    const request = await fetch(link);
    const respons = await request.json();

    if (respons.hits.length === 0) {
      Notiflix.Notify.failure('0 images found.');
      this.setState({ isLoading: false });
    } else {
      this.setState({
        images: [...this.state.images, ...respons.hits],
        total: respons.total,
        isLoading: false,
      });
    }
  };

  handleClick = e => {
    if (e.target.tagName === 'IMG') {
      this.setState({ modalIsOpen: [], modalAlt: '' });
      const newModal = [];
      newModal.push(e.target.getAttribute('dataid'));
      this.setState({ modalIsOpen: newModal, modalAlt: e.target.alt });
    }
  };

  onEscClose = e => {
    if (e.key === 'Escape') {
      this.setState({ modalIsOpen: [], modalAlt: '' });
    }
  };
  onClickClose = e => {
    if (e.target.tagName === 'IMG' || e.target.nodeName === 'DIV') {
      this.setState({ modalIsOpen: [], modalAlt: '' });
    }
  };

  loadMode = () => {
    this.setState({ page: this.state.page + 1, isLoading: true }, () =>
      this.fetchdata()
    );
  };

  render() {
    const { images, modalIsOpen, modalAlt, isLoading, total } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} handleClick={this.handleClick} />
        )}
        {isLoading && <Loader />}
        {modalIsOpen.length > 0 && (
          <Modal
            modalIsOpen={modalIsOpen}
            modalAlt={modalAlt}
            onEscClose={this.onEscClose}
            onClickClose={this.onClickClose}
          />
        )}

        {images.length > 0 && total > images.length ? (
          <Button loadMoreBttn={this.loadMode} />
        ) : null}
      </>
    );
  }
}

App.propTypes = {
  images: PropTypes.object,
  modalIsOpen: PropTypes.object,
  modalAlt: PropTypes.string,
  isLoading: PropTypes.bool,
  total: PropTypes.string,
};

export default App;
