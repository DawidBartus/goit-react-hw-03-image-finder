import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import axios from 'axios';
import Notiflix from 'notiflix';

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
    const link = `https://pixabay.com/api/?q=${this.state.text}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const request = await fetch(link);
    const respons = await request.json();
    this.setState({
      images: [...this.state.images, ...respons.hits],
      isLoading: false,
    });
  };

  handleClick = e => {
    if (e.target.tagName === 'IMG') {
      this.setState({ modalIsOpen: [], modalAlt: '' });
      const newModal = [];
      console.log(e);
      newModal.push(e.target.src);
      this.setState({ modalIsOpen: newModal, modalAlt: e.target.alt });
    }
  };

  onEscClose = e => {
    if (e.key === 'Escape') {
      this.setState({ modalIsOpen: [], modalAlt: '' });
    }
  };
  onClickClose = e => {
    if (e.target.tagName === 'IMG') {
      this.setState({ modalIsOpen: [], modalAlt: '' });
    }
  };

  loadMode = () => {
    this.setState({ page: this.state.page + 1, isLoading: true }, () =>
      this.fetchdata()
    );
  };

  render() {
    const { images, modalIsOpen, modalAlt, isLoading } = this.state;
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

        {images.length > 0 && <Button loadMoreBttn={this.loadMode} />}
      </>
    );
  }
}

export default App;
