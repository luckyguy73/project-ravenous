import React, { Component } from 'react';
import './Business.css';

export class Business extends Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2><a href={this.props.business.url} target="_blank">{this.props.business.name}</a></h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
            <p><a href={`tel:${this.props.business.phone}`}>{this.props.business.phone.replace(/(..)(...)(...)(....)/, '($2) $3-$4')}</a></p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3>{this.props.business.rating} &#9733; Rating</h3>
            <h3>{this.props.business.reviewCount} reviews</h3>
            <h3>{(this.props.business.distance * 0.00062137).toFixed(1)} miles</h3>
          </div>
        </div>
      </div>
    );
  }
}