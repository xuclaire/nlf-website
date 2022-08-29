import React from 'react';
import PropTypes from 'prop-types';

function PastorCard(props) {
  const { photo } = props;
  const { name } = props;
  const { role } = props;

  return (
    <div className="pastor-card-shell" alt="pastor-card-shell">
      <img className="pastor-img" src={photo} alt="pastor-img" />
      <p className="pastor-text" alt="pastor-text">
        <span className="pastor-name" alt="pastor-name">
          {name}
        </span>
        <br />
        <span className="pastor-role" alt="pastor-role">
          {role}
        </span>
        <br />
        <span className="read-more" alt="read-more">
        Read More
        </span>
      </p>
    </div>
  );
}

PastorCard.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default PastorCard;