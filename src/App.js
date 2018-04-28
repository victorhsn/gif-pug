import React, { Component } from 'react';
import GifList from './Components/GifList';
import SearchForm from './Components/SearchForm';
import './assets/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Pug!</h1>
            <SearchForm onSearch={this.search} />
          </div>
        </div>

        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;