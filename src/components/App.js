import './App.css';

import React from 'react';

import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      },
    });

    this.setState({images: response.data.results});
  }

  render() {
    const {images} = this.state;
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={images}></ImageList>
      </div>
    );
  }

}

export default App;
