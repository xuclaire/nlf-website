import React from 'react';
import PropTypes from 'prop-types';
import card from './images/testimony_card.svg';

function TestimonyCard(props) {
  const { text } = props;
  const { name } = props;
  return (
    <>
      <div className="testimony-container">
        <img className="testimony-card" src={card} alt="testimony-card" />
        <p className="testimony-p">{text}</p>
        <h className="testimony-h">{name}</h>
      </div>
    </>
  );
}

TestimonyCard.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default TestimonyCard;
