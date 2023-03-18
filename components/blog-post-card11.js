import React from "react";

import PropTypes from "prop-types";

const BlogPostCard11 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card11-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card11-image"
        />
        <div className="blog-post-card11-container">
          <span className="blog-post-card11-text">{props.label}</span>
          <span className="blog-post-card11-text1">{props.title}</span>
          <span className="blog-post-card11-text2">{props.description}</span>
          <div className="blog-post-card11-container1">
            <div className="blog-post-card11-profile"></div>
            <span className="blog-post-card11-text4">{props.time}</span>
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

BlogPostCard11.defaultProps = {
  profile_alt: "profile",
  title: "Lorem ipsum dolor sit amet",
  rootClassName: "",
  image_alt: "image",
  profile_src:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200",
  image_src:
    "https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000",
  author: "Jon Doe",
  time: "5 min read",
};

BlogPostCard11.propTypes = {
  profile_alt: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  profile_src: PropTypes.string,
  image_src: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
};

export default BlogPostCard11;
