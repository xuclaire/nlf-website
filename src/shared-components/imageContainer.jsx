import React from 'react';
import PropTypes from 'prop-types';

function ImageContainer(props) {
  const { photo } = props;
  const { title } = props;
  const { description } = props;

  return (
    <div className="image-container-shell" alt="event-container-shell">
      <img className="img-box2" src={photo} alt="img-box" />
      <p className="image-title-details" alt="event-title-details">
        {title}
      </p>
    </div>
  );
}

ImageContainer.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageContainer;
