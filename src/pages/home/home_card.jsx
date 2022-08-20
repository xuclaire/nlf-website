import React from 'react';
import PropTypes from 'prop-types';
import './home_card.css';

function HomeCard(props) {
  const { img } = props;
  const { description } = props;
  const { button } = props;
  const { link } = props;

  return (
    <div className="container_shell">
      <img src={img} />
      <div className="card">
        <p>{description}</p>
        <a href={link} >
          <button className="button">
            {button}
          </button>
        </a>
      </div>
    </div>
  );
}

HomeCard.propTypes = {
  img: PropTypes.oneOf(['img', 'svg']).isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeCard;
