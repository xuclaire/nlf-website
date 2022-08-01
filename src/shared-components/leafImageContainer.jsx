import React from 'react';
import LeafImage from '../leaf.svg';
import LeafShadowImage from '../leafShadow.svg';

function LeafImageContainer() {
  return (
    <div className="leaf-outline">
      <img className="leaf-shadow" src={LeafShadowImage} alt="leaf-shadow" />
      <img className="leaf" src={LeafImage} alt="leaf" />
    </div>
  );
}

export default LeafImageContainer;
