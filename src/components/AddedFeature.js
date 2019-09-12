import React from 'react';
import { isTemplateElement } from '@babel/types';

const AddedFeature = ({ feature, item }) => {
  return (
    <li key={item.id}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {feature.name}
    </li>
  );
};


export default AddedFeature;
