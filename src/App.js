import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionsList from './components/ActionsList';
injectTapEventPlugin();

class App extends Component {
  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Paul Love Project 1</h2>
          </div>
          <div className="Main-body">
            <h3>Job Search Data</h3>
            <ActionsList data={this.props.data} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
