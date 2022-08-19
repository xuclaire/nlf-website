import React from 'react';
import PropTypes from 'prop-types';
// import { Text, StyleSheet } from "react-native";

function EventContainer(props) {
  const { photo } = props;
  const { event } = props;
  const { details } = props;
  const { description } = props;

  return (
    <div className="event-container-shell" alt="event-container-shell">
      <img className="img-box" src={photo} alt="img-box" />
      <p className="event-title-details" alt="event-title-details">
        <span className="event-title" alt="event-title">
          {event}
        </span>
        <br />
        <span className="event-details" alt="event-details">
          {details}
        </span>
      </p>
      <p className="event-description" alt="event-description">
        {description}
      </p>
    </div>
  );
}

EventContainer.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  event: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventContainer;
