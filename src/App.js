import React, { Component } from 'react';
import './App.css';
import Tabs from './components/main';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">URL Shortener</h2>
      </header>
      <Tabs />
    </div>
    );
  }
}

export default App;
