import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';



function Header() {
    return (

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Jewelry design and making</h1>
        </header>
  );
}
export default Header;
