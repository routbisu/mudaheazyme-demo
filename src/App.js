import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <MainContent />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
