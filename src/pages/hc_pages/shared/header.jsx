import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

import ShepCard from './shep_card';
import LeafImageContainerFaceRight from '../../../shared-components/leafImageContainerFaceRight';

export default function Header(props) {
  const { photo } = props;
  const { HCname } = props;
  const { description } = props;
  const { shepName1 } = props;
  const { shepSchool1 } = props;
  const { shepMajor1 } = props;
  const { shepEmail1 } = props;
  const { shepMessenger1 } = props;
  const { shepPhoto1 } = props;

  return (
    <div className="hc-header">
      <div className="hc-header-flex">
        <div className="hc-header-container">
          <p className="hc-header-h">{HCname}</p>
          <p className="hc-header-description">{description}</p>
        </div>
        <div className="shep-container">
          <p className="hc-header-description">Shepherds:</p>
          <div className="shep-flex">
            <ShepCard
              photo={shepPhoto1}
              name={shepName1}
              school={shepSchool1}
              major={shepMajor1}
              fb={shepMessenger1}
              email={shepEmail1}
            />
          </div>
        </div>
      </div>
      <LeafImageContainerFaceRight photo={photo} />
    </div>
  );
}

Header.propTypes = {
  photo: PropTypes.oneOf(['img', 'svg']).isRequired,
  HCname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shepName1: PropTypes.string.isRequired,
  shepSchool1: PropTypes.string.isRequired,
  shepMajor1: PropTypes.string.isRequired,
  shepEmail1: PropTypes.string.isRequired,
  shepMessenger1: PropTypes.string.isRequired,
  shepPhoto1: PropTypes.string.isRequired,
};
