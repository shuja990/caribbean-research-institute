import React from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-information">
          <div className="footer-content">
            <div className="footer-header">
              <Branding></Branding>
              <p className="footer-text">{props.text}</p>
            </div>
            <div className="footer-contact-list">
              <div className="footer-contact">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="footer-image"
                />
                <span className="footer-text01">{props.text1}</span>
              </div>
              <div className="footer-contact1">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="footer-image1"
                />
                <span className="footer-text02">{props.text2}</span>
              </div>
              <div className="footer-contact2">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon"
                >
                  <path d="M686.286 707.429c0-101.143-24.571-213.714-126.286-213.714-31.429 18.286-74.286 49.714-121.143 49.714s-89.714-31.429-121.143-49.714c-101.714 0-126.286 112.571-126.286 213.714 0 56.571 37.143 97.143 82.857 97.143h329.143c45.714 0 82.857-40.571 82.857-97.143zM587.429 368c0-82.286-66.857-148.571-148.571-148.571s-148.571 66.286-148.571 148.571c0 81.714 66.857 148 148.571 148s148.571-66.286 148.571-148zM950.857 676.571v109.714c0 10.286-8 18.286-18.286 18.286h-54.857v128c0 50.286-41.143 91.429-91.429 91.429h-694.857c-50.286 0-91.429-41.143-91.429-91.429v-841.143c0-50.286 41.143-91.429 91.429-91.429h694.857c50.286 0 91.429 41.143 91.429 91.429v128h54.857c10.286 0 18.286 8 18.286 18.286v109.714c0 10.286-8 18.286-18.286 18.286h-54.857v73.143h54.857c10.286 0 18.286 8 18.286 18.286v109.714c0 10.286-8 18.286-18.286 18.286h-54.857v73.143h54.857c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
                <span className="footer-text03">{props.text21}</span>
              </div>
            </div>
          </div>
          <span className="footer-copyright">{props.Copyright}</span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="link">{props.Text}</span>
            <span className="link">{props.Text1}</span>
            <span className="link">{props.Text2}</span>
            <span className="link">{props.Text3}</span>
            <span className="link">{props.Text4}</span>
            <span className="link">{props.Text5}</span>
          </div>
          <div className="footer-column1">
            <span className="link">{props.Text6}</span>
            <span className="link">{props.Text7}</span>
            <span className="link">{props.Text8}</span>
            <span className="link">{props.Text9}</span>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            font-family: Lato;
            line-height: 27px;
          }
          .footer-contact-list {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-contact {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image {
            width: 24px;
            height: 18px;
            object-fit: cover;
          }
          .footer-text01 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-contact1 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image1 {
            width: 18px;
            height: 24px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
          }
          .footer-text02 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-contact2 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
          }
          .footer-text03 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-copyright {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 14px;
            font-family: Lato;
            line-height: 21px;
          }
          .footer-links {
            gap: 110px;
            display: flex;
            align-items: flex-start;
            padding-right: 135px;
            flex-direction: row;
          }
          .footer-column {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-column1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .footer-footer {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-header {
              gap: var(--dl-space-space-unit);
            }
            .footer-copyright {
              display: none;
            }
            .footer-links {
              gap: var(--dl-space-space-threeunits);
              padding-right: 0px;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Text5: 'Contact',
  Text9: 'Facebook',
  Text1: 'Training\n',
  Copyright: '©2023 Midalta. All Rights Reserved.',
  image_alt: 'image',
  Text: 'About',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image_src: '/playground_assets/group%201639.svg',
  Text3: 'Membership',
  rootClassName: '',
  text1: 'crc@mec.cuny.edu',
  Text8: 'Twitter',
  Text4: 'Blog',
  Text6: 'Linkedin',
  Text2: 'Events',
  text2: '7182706218',
  image_alt1: 'image',
  image_src1: '/playground_assets/group%201640.svg',
  Text7: 'Instagram',
  text21: '1150 Carroll Street, Rms C313-C315, Brooklyn NY 11225',
}

Footer.propTypes = {
  Text5: PropTypes.string,
  Text9: PropTypes.string,
  Text1: PropTypes.string,
  Copyright: PropTypes.string,
  image_alt: PropTypes.string,
  Text: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  Text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  Text8: PropTypes.string,
  Text4: PropTypes.string,
  Text6: PropTypes.string,
  Text2: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  Text7: PropTypes.string,
  text21: PropTypes.string,
}

export default Footer
