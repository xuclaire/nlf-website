import React from 'react';
import PropTypes from 'prop-types';

import './photo_gallery.css';

export default function PhotoGallery(props) {
  const { photo1 } = props;
  const { photo2 } = props;
  const { photo3 } = props;
  const { photo4 } = props;
  const { photo5 } = props;
  const { photo6 } = props;
  const { photo7 } = props;
  const { photo8 } = props;
  const { photo9 } = props;
  const { photo10 } = props;
  const { photo11 } = props;
  const { photo12 } = props;

  return (
    <div className="photo-gallery-container">
      <p className="photo-gallery-h">Photo Gallery</p>
      <div className="photo-gallery-grid">
        <div>
          <img className="photo-img" src={photo1} />
        </div>
        <div>
          <img className="photo-img" src={photo2} />
        </div>
        <div>
          <img className="photo-img" src={photo3} />
        </div>
        <div>
          <img className="photo-img" src={photo4} />
        </div>
        <div>
          <img className="photo-img" src={photo5} />
        </div>
        <div>
          <img className="photo-img" src={photo6} />
        </div>
        <div>
          <img className="photo-img" src={photo7} />
        </div>
        <div>
          <img className="photo-img" src={photo8} />
        </div>
        <div>
          <img className="photo-img" src={photo9} />
        </div>
        <div>
          <img className="photo-img" src={photo10} />
        </div>
        <div>
          <img className="photo-img" src={photo11} />
        </div>
        <div>
          <img className="photo-img" src={photo12} />
        </div>
      </div>
    </div>
  );
}

PhotoGallery.propTypes = {
  photo1: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo2: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo3: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo4: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo5: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo6: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo7: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo8: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo9: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo10: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo11: PropTypes.oneOf(['img', 'svg']).isRequired,
  photo12: PropTypes.oneOf(['img', 'svg']).isRequired,
};
