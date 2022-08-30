import React from 'react';
import PropTypes from 'prop-types';

import './shep_card.css';
import fbIcon from './fb.svg';
import emailIcon from './gmail.svg';

function ShepCard(props) {
  const { photo } = props;
  const { name } = props;
  const { school } = props;
  const { major } = props;
  const { fb } = props;
  const { email } = props;

  return (
    <div className="shep-card-shell">
      <div>
        <img className="shep-image" src={photo}/>
      </div>
      <div className="shep-description">
        <p className="shep-name">{name}</p>
        <p className="shep-details">{school}</p>
        <p className="shep-details">{major}</p>
        <div className="shep-contacts">
          <a href={email} target="_blank" rel="noreferrer">
            <img src={emailIcon} />
          </a>
          <a href={fb} target="_blank" rel="noreferrer">
            <img src={fbIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

ShepCard.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  fb: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ShepCard;
