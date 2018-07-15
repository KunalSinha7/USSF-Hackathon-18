import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppBar />
        <Main />
      </div>  

    );
  }
}

export default App;
