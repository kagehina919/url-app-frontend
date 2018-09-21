import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import URLTable from './components/tables';
import './App.css';
import Profile from './components/userPage';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">URL Shortener</h2>
      </header>
      <Jumbotron>
        <URLTable/>
      </Jumbotron>    
      <Profile/>
    </div>
    );
  }
}

export default App;
