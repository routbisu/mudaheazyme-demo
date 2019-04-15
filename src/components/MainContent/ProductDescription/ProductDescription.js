import React, { Component } from 'react';
import './ProductDescription.scss';
import NintendoSwitch from './prod_desc_nintendo.jpg';
import { connect } from 'react-redux';
import { getProductDescription } from '../../../actions/productActions';
import SimilarProducts from './SimilarProducts/SimilarProducts';

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.props.getProductDescription(this.props.match.params.id);
  }

  render() {
    const item = this.props.productDescriptionData;

    return (
      <div>
        {item ? (
          <div className="prod-desc-container">
            <div className="mudah-breadcrumb">
              Home > Electronics > Games &amp; Consoles > <a href="/">{item.attributes && item.attributes.title}</a>
            </div>
            <div className="prod-header">{item.attributes && item.attributes.title}</div>
            <img src={NintendoSwitch} className="product-img" alt="Nintendo" />

            <div className="prod-sidebar">
              <div className="prod-details">
                <div className="sidebar-header">
                  <i className="material-icons">favorite_border</i>
                  <span>Wishlist</span>
                  <i className="material-icons">share</i>
                  <span>Share</span>
                </div>

                <div className="label">Price</div>
                <div className="detail-text price">{item.attributes && item.attributes.price}</div>
                <div className="label">Item condition</div>
                <div className="detail-text">{item.attributes && item.attributes.condition}</div>
                <div className="label">Item Location</div>
                <div className="detail-text">{item.attributes && item.attributes.location}</div>
                <div className="label">Seller info</div>
                <div className="detail-text seller-info">
                  <i className="material-icons">account_circle</i>
                  <div className="seller-name">{item.attributes && item.attributes.seller_name}</div>
                  <div className="label">{item.attributes && item.attributes.seller_type}</div>
                </div>
              </div>

              <div className="contact-details-section">
                <div className="label">Interested in the ad? Contact the seller</div>
                <div className="btn-contact">
                  <i className="material-icons">phone</i>
                  <span>{item.attributes && item.attributes.phone}</span>
                </div>
                <div className="btn-contact">
                  <i className="material-icons">email</i>
                  <span>Email</span>
                </div>
                <div className="btn-contact chat">
                  <i className="material-icons">chat</i>
                  <span>Chat</span>
                </div>
              </div>
            </div>

            <div className="prod-desc">
              <div className="prod-desc-header">
                <div className="desc-head-text">Description</div>
                <div className="report-ad">
                  <i className="material-icons">flag</i> Report Ad
                </div>
              </div>
              <div className="prod-desc-body">
                {item.attributes && item.attributes.description.replace(/(?:\r\n|\r|\n)/g, '<br />')}
              </div>
            </div>
          </div>
        ) : null}
        <SimilarProducts selectedProductId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productDescriptionData: state.productState.productDescriptionData
});

export default connect(
  mapStateToProps,
  { getProductDescription }
)(ProductDescription);
