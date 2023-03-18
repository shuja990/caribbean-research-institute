import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Services from "../components/services";
import BlogPostCard11 from "../components/blog-post-card11";
import Footer from "../components/footer";

const News = (props) => {
  return (
    <>
      <div className="news-container">
        <Head>
          <title>News - Remarkable template</title>
          <meta property="og:title" content="News - Remarkable template" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <Services rootClassName="services-root-class-name"></Services>
        <div className="news-blog">
          <div className="news-container1">
            <BlogPostCard11
              rootClassName="rootClassName3"
              image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
              title={"1-on-1 with Caribbean Research Center CEO"}
            ></BlogPostCard11>
          </div>
          <div className="news-container2">
            <BlogPostCard11
              title={
                "From Idea to Reality: The Evolution of Caribbean Research Center"
              }
              image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></BlogPostCard11>
          </div>
          <div className="news-container3">
            <BlogPostCard11
              title={"Local Non-Profit Makes a Splash with Summer Fundraiser"}
              image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></BlogPostCard11>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .news-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .news-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .news-container1 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .news-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .news-container3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .news-blog {
              flex-direction: column;
            }
            .news-container1 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .news-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .news-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .news-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  );
};

export default News;
