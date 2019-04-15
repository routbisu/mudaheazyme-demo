import React, { Component } from 'react';
import '../../ProductCatalog/ProductCatalog.scss';
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
      <div className="product-catalog-container">
        <div className="row">
          <div className="product-catalog-heading">SIMILAR ITEMS</div>
        </div>
        <div className="row">
          {this.props.similarProductsData &&
            this.props.similarProductsData.map((item, i) => (
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
  similarProductsData: state.productState.similarProductsData
});

export default connect(
  mapStateToProps,
  { listSimilarProducts }
)(SimilarProducts);
