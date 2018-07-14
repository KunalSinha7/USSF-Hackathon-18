import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Main from './Main';
import muiTheme from './Theme'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

      <div className="App">
      
        <AppBar />
        <Main />
      </div>
      </MuiThemeProvider>

      

    );
  }
}

export default App;
