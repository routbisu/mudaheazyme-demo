import React, { Component } from 'react';
import './ProductCatalog.scss';
import ProductImage from './productImage.png';

export default class ProductCatalog extends Component {
  render() {
    return (
      <div className="product-catalog-container">
        <div className="row">
          <div className="product-catalog-heading">LISTING</div>
        </div>
        <div className="row">
          <div className="col-md-2 col-6">
            <div className="product-catalog">
              <img src={ProductImage} alt="" />
              <div className="product-description">Nintendo Switch grey full set warranty</div>
              <div className="product-price">RM1,200</div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="product-catalog">
              <img src={ProductImage} alt="" />
              <div className="product-description">Nintendo Switch grey full set warranty</div>
              <div className="product-price">RM1,200</div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="product-catalog">
              <img src={ProductImage} alt="" />
              <div className="product-description">Nintendo Switch grey full set warranty</div>
              <div className="product-price">RM1,200</div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="product-catalog">
              <img src={ProductImage} alt="" />
              <div className="product-description">Nintendo Switch grey full set warranty</div>
              <div className="product-price">RM1,200</div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="product-catalog">
              <img src={ProductImage} alt="" />
              <div className="product-description">Nintendo Switch grey full set warranty</div>
              <div className="product-price">RM1,200</div>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="product-catalog">
              <img src={ProductImage} alt="" />
              <div className="product-description">Nintendo Switch grey full set warranty</div>
              <div className="product-price">RM1,200</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
