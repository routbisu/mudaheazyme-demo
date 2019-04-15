import React, { Component } from 'react';
import './ProductDescription.scss';
import NintendoSwitch from './prod_desc_nintendo.jpg';

export class ProductDescription extends Component {
  render() {
    console.log('props.id', this.props.match.params.id);
    return (
      <div className="prod-desc-container">
        <div className="mudah-breadcrumb">
          Home > Electronics > Games &amp; Consoles > <a href="/">Some title title </a>
        </div>
        <div className="prod-header">Nintendo switch neon browser sync</div>
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
            <div className="detail-text price">RM1,289</div>
            <div className="label">Item condition</div>
            <div className="detail-text">Brand new in the box</div>
            <div className="label">Item Location</div>
            <div className="detail-text">Bangsar South, Kualalumpur</div>
            <div className="label">Seller info</div>
            <div className="detail-text seller-info">
              <i className="material-icons">account_circle</i>
              <div className="seller-name">Takeshi Nakamura</div>
              <div className="label">Private Seller</div>
            </div>
          </div>

          <div className="contact-details-section">
            <div className="label">Interested in the ad? Contact the seller</div>
            <div className="btn-contact">
              <i className="material-icons">phone</i>
              <span>017 6895xxx</span>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas et neque hic! Ipsa repellendus et
            earum, quibusdam illo hic quos consequuntur perferendis quod enim eveniet nostrum nesciunt rerum sapiente.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos exercitationem unde sunt
            possimus ea, et dolorem rem deserunt iusto est suscipit illo, doloremque reprehenderit? Eaque culpa tempora
            illo molestiae eveniet. Numquam dignissimos est iste et obcaecati, itaque voluptas adipisci quis omnis
            consequatur eaque quo ab officia recusandae eligendi sapiente. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sit ipsum odit necessitatibus quaerat quas, facilis qui nisi cumque repellat quibusdam
            assumenda alias doloribus provident officia veniam molestiae et! Tempora in animi distinctio consequatur
            sunt cum iste? Facilis nobis tempora similique, assumenda aliquam eaque exercitationem praesentium a eveniet
            velit ducimus labore sunt eos accusamus laborum dolore ad voluptatum beatae impedit eligendi animi expedita!
            Temporibus quos cupiditate, rem voluptate aut ex, cum nobis quae odit perferendis fugit iure hic dignissimos
            voluptatum architecto magnam, suscipit blanditiis sunt officiis? Ea dolorem nihil tenetur. Adipisci cum quas
            asperiores sit unde quisquam nemo amet. Pariatur, cumque. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Reiciendis soluta ad nemo possimus. Exercitationem dolore in soluta deserunt blanditiis
            neque aperiam ut officiis aspernatur laboriosam consequatur, assumenda, ducimus at dolor, vero magnam libero
            nostrum!
          </div>
        </div>

        <div className="similar-items" />
      </div>
    );
  }
}

export default ProductDescription;
