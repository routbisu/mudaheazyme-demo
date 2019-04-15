import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <ProductCatalog />
        </div>
      </Provider>
    );
  }
}

export default App;
