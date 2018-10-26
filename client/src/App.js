import React, { Component } from 'react';
import Jumbo from './components/Jumbotron';
import SearchCard from './components/SearchCard';
import SearchButton from './components/SearchButton';
import ResultsCard from './components/ResultsCard';
import SavedCard from './components/SavedCard';
import API from './utils/API';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  state = {
    articles: [],
    articleSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Hello");
  }

  render() {
    return (
      <div className="App">
      <Jumbo/>
      <SearchCard/>
      <SearchButton
        onClick={this.handleFormSubmit}
        type="primary"
        className="input-lg"
        >
        Submit
        </SearchButton>
      <br/>
      <ResultsCard/>
      <br/>
      <SavedCard/>
      </div>
    );
  }
}

export default App;
