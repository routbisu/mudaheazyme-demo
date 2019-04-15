import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import ProductDescription from './ProductDescription/ProductDescription';

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ProductCatalog} />
        <Route exact path="/view/:id" component={ProductDescription} />
      </div>
    );
  }
}
