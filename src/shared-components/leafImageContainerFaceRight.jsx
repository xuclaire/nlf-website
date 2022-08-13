import React from 'react';
import PropTypes from 'prop-types';
import LeafShadowImage from '../leafShadow.svg';

function LeafImageContainerFaceRight(props) {
  const { photo } = props;
  return (
    <div className="leaf-outline">
      <img className="leaf-shadow" src={LeafShadowImage} alt="leaf-shadow" />
      <img className="leaf" src={photo} alt="leaf" />
    </div>
  );
}

LeafImageContainerFaceRight.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
};

export default LeafImageContainerFaceRight;
