import React, { Component } from 'react';
import './SimilarProducts.scss';
import ProductImage from '../../ProductCatalog/productImage.png';
import { connect } from 'react-redux';
import { listSimilarProducts } from '../../../../actions/productActions';

class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.props.listSimilarProducts(this.props.selectedProductId);
  }

  render() {
    return (
      <div className="similar-products-container">
        <div className="row">
          <div className="similar-products-heading">SIMILAR ITEMS</div>
        </div>
        <div className="row similar-products-row">
          <div className="col-md-6 col-sm-6 col-6">
            <div className="row">
              {this.props.similarProductsData &&
                this.props.similarProductsData.map((item, i) => (
                  <div key={i} className="col-md-3 col-sm-12 col-12 similar-product-column">
                    {i < 4 ? (
                      <div className="similar-product" onClick={() => (window.location = `#/view/${item.id}`)}>
                        <img src={ProductImage} alt={item.attributes && item.attributes.title} />
                        <div className="product-description">{item.attributes && item.attributes.title}</div>
                        <div className="product-price">{item.attributes && item.attributes.price}</div>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-6">
            <div className="row">
              {this.props.similarProductsData &&
                this.props.similarProductsData.map((item, i) => (
                  <div
                    key={i}
                    className="col-md-3 col-sm-12 col-12 similar-product-column similar-product-second-column"
                  >
                    {i >= 4 ? (
                      <div className="similar-product" onClick={() => (window.location = `#/view/${item.id}`)}>
                        <img src={ProductImage} alt={item.attributes && item.attributes.title} />
                        <div className="product-description">{item.attributes && item.attributes.title}</div>
                        <div className="product-price">{item.attributes && item.attributes.price}</div>
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  similarProductsData: state.productState.similarProductsData
});

export default connect(
  mapStateToProps,
  { listSimilarProducts }
)(SimilarProducts);
