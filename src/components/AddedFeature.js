import React from 'react';
import { connect } from 'react-redux';
import { ADD_FEATURE } from '../actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log('ADD_FEATURE', state);
  return {
    name: state.feature.name
  };
}

export default connect(mapStateToProps, 
  { ADD_FEATURE })(AddedFeature);
