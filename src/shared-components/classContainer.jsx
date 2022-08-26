import React from 'react';
import PropTypes from 'prop-types';

function ClassContainer(props) {
  const { photo } = props;

  return (
    <div className="class-container-shell" alt="class-container-shell">
      <img className="class-img-box" src={photo} alt="class-img-box" />
    </div>
  );
}

ClassContainer.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
};

export default ClassContainer;
