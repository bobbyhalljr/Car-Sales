import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log('header', state)
  return {
    car: state.image,
    car: state.name,
    car: state.price
  }
}

export default connect(mapStateToProps, {})(Header);
