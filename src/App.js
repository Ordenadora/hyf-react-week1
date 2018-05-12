import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './Content';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
/*
function Header() {
  return (
    <header className="App-header">
    <img src={logo} className="App-Logo" alt="Logo" />
    <h1 className="App-title">Crystal Chakra</h1>
    
    </header>
  );
}

function App() {
  return (
    <div className="App">
    <Header>
      My Awesome Company
      </Header>
      <Content />
      </div>
  );
}
*/
export default App;

