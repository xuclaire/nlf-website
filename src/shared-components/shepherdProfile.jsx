import React from 'react';
import PropTypes from 'prop-types';

function ShepherdProfile(props) {
  const { photo } = props;
  const { name } = props;
  const { house_church } = props;

  return (
    <div className="shepherd-profile-shell" alt="shepherd-profile-shell">
      <img className="shepherd-img" src={photo} alt="shepherd-img" />
      <p className="shepherd-text" alt="shepherd-text">
        <span className="shepherd-name" alt="shepherd-name">
          {name}
        </span>
        <br />
        <span className="shepherd-house-church" alt="shepherd-house-church">
          {house_church}
        </span>
      </p>
    </div>
  );
}

ShepherdProfile.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  name: PropTypes.string.isRequired,
  house_church: PropTypes.string.isRequired,
};

export default ShepherdProfile;