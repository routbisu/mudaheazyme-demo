import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductCatalog />
      </div>
    );
  }
}

export default App;
