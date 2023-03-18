import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import GalleryCard3 from "../components/gallery-card3";
import Footer from "../components/footer";

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container">
        <Head>
          <title>Gallery - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="Gallery - Caribbean Research Institute"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
        <div className="gallery-gallery">
          <h1 className="gallery-text">Gallery</h1>
          <span className="gallery-text1">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          <h2 style={{ margin: "10px" }}>SYEP 2022</h2>
          <div className="gallery-container1">
            <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home.jpg"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home1.jpg"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home2.jpg"
              rootClassName="rootClassName2"
            ></GalleryCard3>
          </div>
          <h2 style={{ margin: "10px" }}>Invest Tobago 2022</h2>
          <div className="gallery-container1">
            <GalleryCard3
              image_src="/playground_assets/home3.jpg"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home4.jpg"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/event-details.jpg"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home.jpg"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home1.jpg"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home2.jpg"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home3.jpg"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="/playground_assets/home4.jpg"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery-gallery {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .gallery-text {
            font-size: 3rem;
            text-align: center;
          }
          .gallery-text1 {
            color: var(--dl-color-gray-700) !important;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .gallery-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .gallery-text1 {
              text-align: center;
            }
            .gallery-container1 {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .gallery-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .gallery-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .gallery-container1 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
              padding: var(--dl-space-space-unit);
            }
            .gallery-container1 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default Gallery;
