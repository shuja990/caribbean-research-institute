import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Services from "../components/services";
import BlogPostCard11 from "../components/blog-post-card11";
import Footer from "../components/footer";
import VideoCard from "../components/VideoCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./_app";
import DigitalArchiveCard from "../components/DigitalArchiveCard";

const News = (props) => {
    const [videos, setVideos] = useState([]);

    const getNews = async () => {
        try {
            let data = [];
            const querySnapshot = await getDocs(collection(db, "digitalArchive"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                data.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setVideos(data);
        } catch (error) {
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <div className="news-container">
                <Head>
                    <title>Digital Archive - Caribbean Research Institute</title>
                    <meta
                        property="og:title"
                        content="Digital Archive - Caribbean Research Institute"
                    />
                </Head>
                <Navbar rootClassName="navbar-root-class-name"></Navbar>
                <Services
                    rootClassName="services-root-class-name"
                    heading={"Digital Archive"}
                    text={
                        ""
                    }
                ></Services>
                <div className="news-blog">
                    {videos?.map((video) => (
                        <div className="news-container1">
                        <DigitalArchiveCard videoUrl={video?.file} title={video?.title} tags={video?.tags} />
                        </div>
                    ))}
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
            flex-wrap: wrap;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: flex-start;
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
              justify-content: center;
            }
          }
        `}
            </style>
        </>
    );
};

export default News;
