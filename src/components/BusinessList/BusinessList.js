import React, { Component } from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business';

export class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business, i) => {
          return <Business key={business.name + i} business={business} />
        })}
      </div>
    );
  }
}