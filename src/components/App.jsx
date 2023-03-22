import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = '14551273-a2f87cd1c4bb2f6c327ac1a47';

class MainClass extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    searchText: '',
    total: '',
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(e.target[1].value);
  //   this.setState({ searchText: e.target[1].value });
  // };

  getImages = async () => {
    const request = await fetch(
      `https://pixabay.com/api/?q=cat&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const respons = await request.json();
    console.log(respons.hits);
    this.setState({ images: respons.hits });
  };

  componentDidMount() {
    this.getImages();
  }
  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const response = await axios.get(
  //       `https://pixabay.com/api/?q=cat&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     );

  //     this.setState({ images: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <ImageGallery /> */}
      </>
    );
  }
}

const App = () => {
  return <MainClass />;
};

export default App;

// handleSearch = e => {
//   e.preventDefault();
//   const formValue = e.target.firstChild.value;
//   console.log(formValue);
//   const link = `https://pixabay.com/api/?q=${formValue}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   this.FetchImage(link).then(res=>{})
//   console.log(images);
// };

// FetchImage = async link => {
//   try {
//     const response = await axios.get(link);
//     const images = await response.data;

//     return images;
//   } catch (error) {
//     Notiflix.Notify.info(error.message);
//   }
// };
// render() {
//   return <Searchbar onSubmit={this.handleSearch} />;
// }
