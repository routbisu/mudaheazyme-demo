import React, { Component } from 'react';
import './ProductCatalog.scss';
import ProductImage from './productImage.png';
import { connect } from 'react-redux';
import { listProducts } from '../../../actions/productActions';

class ProductCatalog extends Component {
  constructor(props) {
    super(props);
    this.props.listProducts();
  }

  render() {
    return (
      <div className="product-catalog-container">
        <div className="row">
          <div className="product-catalog-heading">LISTING</div>
        </div>
        <div className="row">
          {this.props.productsListData &&
            this.props.productsListData.map((item, i) => (
              <div key={i} className="col-md-2 col-6">
                <div className="product-catalog" onClick={() => (window.location = `#/view/${item.id}`)}>
                  <img src={ProductImage} alt={item.attributes && item.attributes.title} />
                  <div className="product-description">{item.attributes && item.attributes.title}</div>
                  <div className="product-price">{item.attributes && item.attributes.price}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsListData: state.productState.productsListData
});

export default connect(
  mapStateToProps,
  { listProducts }
)(ProductCatalog);
