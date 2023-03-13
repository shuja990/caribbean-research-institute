import React from "react";

import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className="card-card card">
        <div className="card-header">
          <img alt="image" src={props.Icon} className="card-icon" />
          <h3 className="card-heading">{props.Title}</h3>
        </div>
        <p className="card-text">{props.Description}</p>
      </div>
      <style jsx>
        {`
          .card-card {
            position: relative;
            background: #ebcf02;
          }
          .card-header {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card-icon {
            height: 50px;
            object-fit: cover;
          }
          .card-heading {
            color: rgb(18, 40, 33) !important;
            font-size: 24px;
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .card-text {
            color: rgb(18, 40, 33);
            max-width: 600px;
            font-family: Lato;
            line-height: 24px;
          }
        `}
      </style>
    </>
  );
};

Card.defaultProps = {
  Icon: "/playground_assets/group%201643.svg",
  Title: "High-impact business services",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

Card.propTypes = {
  Icon: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
};

export default Card;
