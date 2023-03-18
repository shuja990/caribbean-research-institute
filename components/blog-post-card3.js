import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard3 = (props) => {
  return (
    <>
      <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card3-image"
        />
        <div className="blog-post-card3-container">
          <h1 className="blog-post-card3-text">{props.title}</h1>
          <div className="blog-post-card3-container1">
            <span className="blog-post-card3-text1">{props.description}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card3-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .blog-post-card3-image {
            width: 500px;
            height:400px;
            object-fit: contain;
          }
          .blog-post-card3-container {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card3-text {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .blog-post-card3-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card3-text1 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }

          @media (max-width: 991px) {
            .blog-post-card3-image {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card3-blog-post-card {
              flex-direction: column;
              justify-content: space-between;
            }
            .blog-post-card3-image {
              width: 100%;
            }
            .blog-post-card3-container {
              width: 100%;
            }
            .blog-post-card3-text {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-post-card3-container1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard3.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
}

BlogPostCard3.propTypes = {
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard3
