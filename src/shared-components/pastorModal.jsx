import React from 'react';
import PropTypes from 'prop-types';

function PastorModal(props) {
  const { photo } = props;
  const { name } = props;
  const { role } = props;
  const { bio } = props;

  return (
    <div className="pastor-modal-shell" alt="pastor-modal-shell">
      <img className="pastor-img-modal" src={photo} alt="pastor-img-modal" />
      <div className="pastor-text-modal" alt="pastor-text-modal">
        <span className="pastor-name-modal" alt="pastor-name-modal">
          {name}
        </span>
        <br />
        <span className="pastor-role-modal" alt="pastor-role-modal">
          {role}
        </span>
        <br />
        <span className="pastor-bio-modal" alt="pastor-bio-modal">
          {bio}
        </span>
      </div>
      <div className="x-button" alt="x-button">
        x
      </div>
    </div>
  );
}

PastorModal.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default PastorModal;
