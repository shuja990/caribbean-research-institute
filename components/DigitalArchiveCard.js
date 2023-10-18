import React from "react";

import PropTypes from "prop-types";

const DigitalArchiveCard = (props) => {
    return (
        <>
            <div
                className={`blog-post-card11-blog-post-card ${props.rootClassName} `}
            >
                <iframe
                    width="315"
                    height="315"
                    className="blog-post-card11-image"
                    src={props?.videoUrl}
                    title={props?.title}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div className="blog-post-card11-container">
                    {/* <span className="blog-post-card11-text">{props.label}</span> */}
                    <span className="blog-post-card11-text1">{props?.title}</span>
                    {/* <span className="blog-post-card11-text2">{props.description}</span> */}
                    <div className="blog-post-card11-container1">
                        <div className="blog-post-card11-profile"></div>
                        <div className="d-flex flex-wrap">
                        {
                            props?.tags?.map(tag =>
                                <span className="blog-post-card11-text4 bg-black text-white rounded p-2 m-1">{tag}</span>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
          .blog-post-card11-blog-post-card {
            width: 100%;
            width: 320px;
            height: 520px;
            display: flex;
            margin:10px;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card11-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card11-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .blog-post-card11-container {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card11-text {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card11-text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card11-text2 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card11-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-post-card11-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card11-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card11-text3 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card11-text4 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }

          @media (max-width: 991px) {
            .blog-post-card11-image {
              height: 350px;
            }
          }
        `}
            </style>
        </>
    );
};

export default DigitalArchiveCard;
