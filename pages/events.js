import React from "react";
import Link from "next/link";
import Head from "next/head";

import Navbar from "../components/navbar";
import BlogPostCard3 from "../components/blog-post-card3";
import Footer from "../components/footer";
import EventsCalendar from "../components/calendar";

const Events = (props) => {
  return (
    <>
      <div className="events-container">
        <Head>
          <title>Events - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="Events - Caribbean Research Institute"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <div className="events-blog" 
            style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
            >
          <div
            className="events-container1"
            style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
          >
            <EventsCalendar />
          </div>
        </div>
        
        <div className="events-banner">
          <h1 className="events-text">UPCOMING EVENTS</h1>
          <span className="events-text01">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </span>
          <div className="events-btn-group"></div>
        </div>
        <div className="events-blog">
          <div className="events-container1">
            <Link href="/event-details">
              <a className="events-link">
                <BlogPostCard3
                  rootClassName="rootClassName1"
                  className="events-component1"
                ></BlogPostCard3>
              </a>
            </Link>
          </div>
          <div className="events-container2">
            <Link href="/event-details">
              <a className="events-link1">
                <BlogPostCard3
                  image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName2"
                  className="events-component2"
                ></BlogPostCard3>
              </a>
            </Link>
          </div>
          <Link href="/event-details">
            <a className="events-link2">
              <BlogPostCard3
                image_src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName"
                className="events-component3"
              ></BlogPostCard3>
            </a>
          </Link>
        </div>
        <div className="events-banner1">
          <h1 className="events-text05">PAST EVENTS</h1>
          <span className="events-text06">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </span>
          <div className="events-btn-group1"></div>
        </div>
        <div className="events-blog1">
          <div className="events-container3">
            <Link href="/event-details">
              <a className="events-link3">
                <BlogPostCard3
                  rootClassName="rootClassName4"
                  className="events-component4"
                ></BlogPostCard3>
              </a>
            </Link>
          </div>
          <div className="events-container4">
            <Link href="/event-details">
              <a className="events-link4">
                <BlogPostCard3
                  image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName5"
                  className="events-component5"
                ></BlogPostCard3>
              </a>
            </Link>
          </div>
          <Link href="/event-details">
            <a className="events-link5">
              <BlogPostCard3
                image_src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName3"
                className="events-component6"
              ></BlogPostCard3>
            </a>
          </Link>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .events-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .events-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .events-text {
            font-size: 3rem;
            text-align: center;
          }
          .events-text01 {
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .events-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .events-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .events-container1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .events-link {
            display: contents;
          }
          .events-component1 {
            text-decoration: none;
          }
          .events-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .events-link1 {
            display: contents;
          }
          .events-component2 {
            text-decoration: none;
          }
          .events-link2 {
            display: contents;
          }
          .events-component3 {
            text-decoration: none;
          }
          .events-banner1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .events-text05 {
            font-size: 3rem;
            text-align: center;
          }
          .events-text06 {
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .events-btn-group1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .events-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .events-container3 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .events-link3 {
            display: contents;
          }
          .events-component4 {
            text-decoration: none;
          }
          .events-container4 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .events-link4 {
            display: contents;
          }
          .events-component5 {
            text-decoration: none;
          }
          .events-link5 {
            display: contents;
          }
          .events-component6 {
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .events-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .events-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .events-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .events-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .events-text06 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .events-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .events-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .events-btn-group {
              flex-direction: column;
            }
            .events-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .events-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .events-btn-group1 {
              flex-direction: column;
            }
            .events-blog1 {
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

export default Events;
