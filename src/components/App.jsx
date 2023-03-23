import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';

import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = '14551273-a2f87cd1c4bb2f6c327ac1a47';

class MainClass extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    total: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const imageText = e.target.elements.searchInput.value;
    const link = `https://pixabay.com/api/?q=${imageText}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const request = await fetch(link);
    const respons = await request.json();
    this.setState({ images: respons.hits });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button />}
      </>
    );
  }
}

const App = () => {
  return <MainClass />;
};

export default App;

// {this.state.images.length > 0 &&
//   this.state.images.map(image => {
//     return <p>{image.tags}</p>;
//   })}
