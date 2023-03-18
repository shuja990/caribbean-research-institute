import React from 'react'

import PropTypes from 'prop-types'

const Services = (props) => {
  return (
    <>
      <section className={`services-services ${props.rootClassName} `}>
        <div className="services-heading">
          <h2 className="services-text">{props.heading}</h2>
          <p className="services-text1">{props.text}</p>
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
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 130px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .services-heading {
            gap: var(--dl-space-space-unit);
            width: 1173px;
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
          .services-text1 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 20px;
            max-width: 100%;
            font-family: Lato;
            margin-right: var(--dl-space-space-halfunit);
          }
          .services-root-class-name {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 991px) {
            .services-services {
              margin-top: var(--dl-space-space-fourunits);
              padding-left: 20px;
              margin-bottom: var(--dl-space-space-fourunits);
              padding-right: 20px;
            }
          }
          @media (max-width: 479px) {
            .services-services {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .services-text {
              font-size: 32px;
            }
            .services-text1 {
              color: rgb(18, 40, 33);
              font-size: 16px;
              font-family: Lato;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Services.defaultProps = {
  text: 'Our media database includes the latest news footage and archives of past Caribbean Research Center articles. Here you will find the collection of publications and reports dating from the organization’s inception in 2000, all the way up to the present day. Check out some of our featured articles below and learn more about our efforts.',
  heading: 'News and Views',
  rootClassName: '',
}

Services.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Services
