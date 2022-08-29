import React from 'react';
import PropTypes from 'prop-types';

function HousechurchCard(props) {
  const { photo } = props;
  const { HC } = props;
  const { description } = props;

  return (
    <div className="hc-card-shell" alt="event-container-shell">
      <img className="img-box2" src={photo} alt="img-box" />
      <button className="hc-button">{HC}</button>
    </div>
  );
}

HousechurchCard.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  HC: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HousechurchCard;
