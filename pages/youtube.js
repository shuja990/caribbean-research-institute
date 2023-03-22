import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Services from "../components/services";
import BlogPostCard11 from "../components/blog-post-card11";
import Footer from "../components/footer";
import VideoCard from "../components/VideoCard";

const News = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY);

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=UCs3Ykf0MT9zXKak_CCJg5Wg&part=snippet,id&order=date`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const video = data?.items?.map((item) => {
          return {
            title: item?.snippet?.title,
            url: `https://www.youtube.com/embed/${item?.id?.videoId}`,
          };
        });
        setVideos(video);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className="news-container">
        <Head>
          <title>Videos - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="News - Caribbean Research Institute"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <Services
          rootClassName="services-root-class-name"
          heading={"Videos"}
          text={
            "Our media database includes the latest news footage and archives of past Caribbean Research Center videos. Here you will find the collection of publications and reports dating from the organization’s inception in 2000, all the way up to the present day. Check out some of our featured videos below and learn more about our efforts."
          }
        ></Services>
        <div className="news-blog">
          {videos?.map((video) => (
            <div className="news-container1">
              <VideoCard videoUrl={video?.url} title={video?.title} />
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
