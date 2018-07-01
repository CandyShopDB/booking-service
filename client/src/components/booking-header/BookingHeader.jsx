import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PricingDetails from './PricingDetails';
import StarRating from './StarRating';
import Spacing from './Spacing';

class BookingHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewCount: props.reviews.totalreviews,
      starRating: props.reviews.starsum,
      price: props.listing.price,
    };
  }

  render() {
    return (
      <div>
        <div>
          <span>
            <PricingDetails price={this.state.price} />
          </span>
        </div>
        <div>
          <StarRating starRating={this.state.starRating} reviewCount={this.state.starRating} />
        </div>
        <Spacing />
      </div>
    );
  }
}

export default BookingHeader;
