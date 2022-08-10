/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  background: #D9D9D9;
  padding: 30px 10px;
  border-radius: 0px 50px;
  height: 222px;
  width: 222px;
`;

function EventContainer(props) {
  const { photo } = props.src;
  return (
    <Box style={{
      BackgroundImage: 'url({photo})',
    }}>
    </Box>
  );
}

EventContainer.propTypes = {
  src: PropTypes.string,
};

EventContainer.defaultProps = {
  src: 'https://www.streamscheme.com/wp-content/uploads/2022/02/sadge-600.png',
};

export default EventContainer;
