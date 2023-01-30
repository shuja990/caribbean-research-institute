import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Services = (props) => {
  return (
    <>
      <section className={`services-services ${props.rootClassName} `}>
        <div className="services-heading">
          <h2 className="services-text">{props.heading}</h2>
          <p className="services-text01">{props.text}</p>
        </div>
        <div className="services-sections">
          <div className="services-row">
            <div className="services-section">
              <div className="services-header">
                <h3 className="services-text02">{props.heading1}</h3>
                <div className="services-description">
                  <p className="services-text03">{props.text1}</p>
                  <p className="services-text04">{props.text2}</p>
                </div>
              </div>
              <Link href="/blog-post">
                <a className="services-link button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </a>
              </Link>
            </div>
            <div className="services-section1">
              <div className="services-header1">
                <h3 className="services-text08">{props.heading2}</h3>
                <div className="services-description1">
                  <p className="services-text09">{props.text3}</p>
                  <p className="services-text10">{props.text4}</p>
                </div>
              </div>
              <Link href="/blog-post">
                <a className="services-link1 button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="services-row1">
            <div className="services-section2">
              <div className="services-header2">
                <h3 className="services-text14">{props.heading3}</h3>
                <div className="services-description2">
                  <p className="services-text15">{props.text5}</p>
                  <p className="services-text16">{props.text6}</p>
                </div>
              </div>
              <Link href="/blog-post">
                <a className="services-link2 button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </a>
              </Link>
            </div>
            <div className="services-section3">
              <div className="services-header3">
                <h3 className="services-text20">{props.heading4}</h3>
                <div className="services-description3">
                  <p className="services-text21">{props.text7}</p>
                  <p className="services-text22">{props.text8}</p>
                </div>
              </div>
              <Link href="/blog-post">
                <a className="services-link3 button">
                  <span>
                    <span>Read more</span>
                    <br></br>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .services-services {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 120px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 130px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .services-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text {
            color: rgb(18, 40, 33);
            font-size: 56px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .services-text01 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 800px;
            font-family: Lato;
          }
          .services-sections {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .services-row {
            gap: 140px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .services-section {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text02 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .services-description {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text03 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-text04 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-link {
            text-decoration: none;
          }
          .services-section1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text08 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .services-description1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text09 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-text10 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-link1 {
            text-decoration: none;
          }
          .services-row1 {
            gap: 140px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .services-section2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text14 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .services-description2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text15 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-text16 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-link2 {
            text-decoration: none;
          }
          .services-section3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text20 {
            color: rgb(18, 40, 33);
            font-size: 36px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .services-description3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text21 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-text22 {
            color: rgb(18, 40, 33);
            max-width: 1000px;
            font-family: Lato;
            line-height: 24px;
          }
          .services-link3 {
            text-decoration: none;
          }
          .services-root-class-name {
            margin-top: var(--dl-space-space-threeunits);
          }
          @media (max-width: 991px) {
            .services-services {
              margin-top: var(--dl-space-space-fourunits);
              padding-left: 20px;
              margin-bottom: var(--dl-space-space-fourunits);
              padding-right: 20px;
            }
            .services-row {
              gap: var(--dl-space-space-fourunits);
            }
            .services-row1 {
              gap: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .services-services {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .services-text {
              font-size: 32px;
            }
            .services-text01 {
              color: rgb(18, 40, 33);
              font-size: 16px;
              font-family: Lato;
              line-height: 24px;
            }
            .services-sections {
              gap: var(--dl-space-space-threeunits);
            }
            .services-row {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .services-section {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .services-text02 {
              font-size: 24px;
            }
            .services-section1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .services-text08 {
              font-size: 24px;
            }
            .services-row1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .services-section2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .services-text14 {
              font-size: 24px;
            }
            .services-section3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .services-text20 {
              font-size: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Services.defaultProps = {
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  heading2: 'Own your business',
  heading4: 'We can help your business',
  heading3: 'How to build your team',
  text7:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  text: 'Our media database includes the latest news footage and archives of past Caribbean Research Center articles. Here you will find the collection of publications and reports dating from the organization’s inception in 2000, all the way up to the present day. Check out some of our featured articles below and learn more about our efforts.',
  text3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  heading: 'News and Views',
  heading1: 'Understand your customers',
  text2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  text8:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  text5:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  text4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  rootClassName: '',
  text6:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
}

Services.propTypes = {
  text1: PropTypes.string,
  heading2: PropTypes.string,
  heading4: PropTypes.string,
  heading3: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
}

export default Services
