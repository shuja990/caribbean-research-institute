import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className="branding-branding">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="branding-image"
        />
        <svg viewBox="0 0 1024 1024" className="branding-icon">
          <path d="M128 128h768v768h-768z"></path>
        </svg>
        <span className="branding-text">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .branding-image {
            width: var(--dl-size-size-xxlarge);
            object-fit: cover;
          }
          .branding-icon {
            width: 7px;
            height: 7px;
          }
          .branding-text {
            color: rgba(18, 40, 33, 1);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
          }
          @media (max-width: 991px) {
            .branding-icon {
              display: none;
            }
            .branding-text {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  image_src: '/playground_assets/logo.png',
  text1: '',
  image_alt: 'image',
}

Branding.propTypes = {
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Branding
