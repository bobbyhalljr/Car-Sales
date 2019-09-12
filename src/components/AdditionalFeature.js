import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.features.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log('additionalFeature', state);
  return {
    features: state.car.features.name,
    features: state.car.features.price
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
