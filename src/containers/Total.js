// @flow
import React from 'react';
import { connect } from 'react-redux';
import { updateTotal } from '../actions';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('Total', state);
  return {
    car: state.price,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { updateTotal })(Total);
