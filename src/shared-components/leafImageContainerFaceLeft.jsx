import React from 'react';
import PropTypes from 'prop-types';
import LeafShadowImage from './images/leafShadowFaceLeft.svg';

function LeafImageContainerFaceRight(props) {
  const { photo } = props;
  return (
    <div className="leaf-outline-left">
      <img className="leaf-shadow-left" src={LeafShadowImage} alt="leaf-shadow-left" />
      <img className="leaf-left" src={photo} alt="leaf-left" />
    </div>
  );
}

LeafImageContainerFaceRight.propTypes = {
  photo: PropTypes.oneOf([ 'img', 'svg' ]).isRequired,
};

export default LeafImageContainerFaceRight;