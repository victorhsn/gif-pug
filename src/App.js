import React, {Component} from 'react';
import './assets/style.css';
import axios from 'axios';

import GifList from './Components/GifList';
import SearchForm from './Components/SearchForm';

class App extends Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.search();
  }

  search = (query = 'pug') => {

    axios.get(`http://api.giphy.com/v1/gifs/search?q=pug ${query}&limit=24&api_key=dc6zaTOxFJmzC`)
          .then(response => {
            this.setState({
              gifs: response.data.data
            });
          }).catch(error => {
            console.log('Error fetching', error);
        });
  }

  render() {
    return(
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Gif Pug!</h1>
            <SearchForm onSearch={this.search}/>
          </div>
        </div>
        
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;