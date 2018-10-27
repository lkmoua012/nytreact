import React, { Component } from 'react';
import Jumbo from './components/Jumbotron';
import SearchCard from './components/SearchCard';
import ResultsCard from './components/ResultsCard';
import SavedCard from './components/SavedCard';
import API from './utils/API';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Jumbo />
        <SearchCard />
        <br />
        <ResultsCard />
        <br />
        <SavedCard />
      </div>
    );
  }
}

export default App;
