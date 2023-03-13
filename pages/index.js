import React from "react";
import Head from "next/head";

import DangerousHTML from "dangerous-html/react";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Services from "../components/services";
import Footer from "../components/footer";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Caribbean Research Institute</title>
          <meta property="og:title" content="Caribbean Research Institute" />
        </Head>
        <Navbar></Navbar>
        <header className="home-hero">
          <div className="home-content">
            <img
              alt="image"
              src="/playground_assets/line-300w.png"
              className="home-image"
            />
            <h1 className="home-title">
              Caribbean Research Center Welcomes You
            </h1>
            <span className="home-description">
              <span className="home-text">
                The mission of the Caribbean Research Center (CRC) is to provide
                a multidisciplinary understanding of the New York environment
                from the perspective of the diverse social, cultural, and
                economic characteristics of the Caribbean-American community,
                and analysis of the immigrant and migrant experiences of this
                community in the context of the wider Caribbean Diasporas in the
                Americas and Europe.
              </span>
              <br className="home-text01"></br>
              <br className="home-text02"></br>
              <br className="home-text03"></br>
              <br className="home-text04"></br>
            </span>
          </div>
          <div className="home-image01">
            <img
              alt="image"
              src="/playground_assets/hero%20%231-1500w.png"
              className="home-image02"
            />
            <img
              alt="image"
              src="/playground_assets/hero%20%232-1500w.png"
              className="home-image03"
            />
          </div>
        </header>
        <section className="home-mission">
          <h2 className="home-text05">
            <span className="home-text06">
              The CRC is committed to doing this through its research, programs,
              and publications. It offers scholarly insight into the challenges
              and successes of Caribbean immigrants and migrants, and their
              impact on the Diaspora environments in which they live and work,
              as well as the Caribbean basin as a whole.
            </span>
            <br className="home-text07"></br>
            <span className="home-text08">
              The Center will work in partnership with organizations in the
              United States, the Caribbean, and other parts of the world, on
              issues that fall within the scope of the Center’s mission.
            </span>
            <br className="home-text09"></br>
          </h2>
          <button className="button home-button">
            <span className="home-text10">Learn about our mission</span>
          </button>
        </section>
        <section className="home-services">
          <h2 className="home-text11">About</h2>
          <div className="home-cards">
            <div className="home-row">
              <Card></Card>
              <Card
                Icon="/playground_assets/group%201644.svg"
                Title="Learn from the community"
              ></Card>
            </div>
            <div className="home-row1">
              <Card
                Icon="/playground_assets/group%201645.svg"
                Title="Customer acquisition"
              ></Card>
              <Card
                Icon="/playground_assets/group%201646.svg"
                Title="Business to business"
              ></Card>
            </div>
          </div>
        </section>

        {/* <section className="home-partners">
          <div className="home-content2">
            <h2 className="home-text26">Our partners</h2>
            <p className="home-text27">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-partners-desktop">
            <div className="home-column">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B1%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202108.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B2%5D.svg"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column01">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202107.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B3%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B4%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202110.svg"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column02">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202111.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202108.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B5%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B1%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202108.svg"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column03">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B2%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202110.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202107.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B3%5D.svg"
                  className="partner-image"
                />
              </div>
            </div>
          </div>
          <div className="home-partners-mobile">
            <div className="home-row2">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202108.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202111.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B5%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B4%5D.svg"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column04">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B1%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B3%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B4%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202107.svg"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column05">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202111.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202108.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/group%202110.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B1%5D.svg"
                  className="partner-image"
                />
              </div>
            </div>
            <div className="home-column06">
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B2%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B3%5D.svg"
                  className="partner-image"
                />
              </div>
              <div className="partner-container">
                <img
                  alt="image"
                  src="/playground_assets/vector%5B4%5D.svg"
                  className="partner-image"
                />
              </div>
            </div>
          </div>
        </section> */}
        <Services></Services>
        <section className="home-banner">
          <div className="home-container2">
            <div className="home-header">
              <h2 className="home-title1">Lorem Ipsum</h2>
              <p className="home-description1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button">
              <span>
                <span>Call to action</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-galleries">
          <div className="home-gallery-desktop">
            <div className="home-column07">
              <img
                alt="image"
                src="/playground_assets/pexels-darina-belonogova-7959670%201-1300w.png"
                className="home-image41"
              />
            </div>
            <div className="home-column08">
              <div className="home-row3">
                <div className="home-yellow"></div>
                <img
                  alt="image"
                  src="/playground_assets/pexels-darina-belonogova-8373875%203-1300w.png"
                  className="home-image42"
                />
              </div>
              <div className="home-row4">
                <img
                  alt="image"
                  src="/playground_assets/pexels-darina-belonogova-7964869%201-500w.png"
                  className="home-image43"
                />
                <img
                  alt="image"
                  src="/playground_assets/group%202106.svg"
                  className="home-image44"
                />
              </div>
            </div>
          </div>
          <div className="home-gallery-mobile">
            <div className="home-column09">
              <img
                alt="image"
                src="/playground_assets/pexels-darina-belonogova-7959670%201-1300w.png"
                className="home-image45"
              />
              <img
                alt="image"
                src="/playground_assets/pexels-darina-belonogova-7964869%201-500w.png"
                className="home-image46"
              />
            </div>
            <div className="home-column10">
              <div className="home-yellow1"></div>
              <img
                alt="image"
                src="/playground_assets/pexels-darina-belonogova-8373875%203-1300w.png"
                className="home-image47"
              />
              <div className="home-row5">
                <img
                  alt="image"
                  src="/playground_assets/group%202106.svg"
                  className="home-image48"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-newsletter">
          <div className="home-header1">
            <h2 className="home-text31">Subscribe to our newsletter</h2>
            <p className="home-text32">
              Sign up for our newsletter to get the latest news!
            </p>
          </div>
          <div className="home-content3">
            <div className="home-email">
              <input
                type="text"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-submit">
                <img
                  alt="image"
                  src="/playground_assets/frame.svg"
                  className="home-image49"
                />
              </div>
            </div>
            <div className="home-notice">
              <span className="home-notice1">
                By subscribing occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </span>
            </div>
          </div>
        </section>
        <div>
          <DangerousHTML
            html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
          ></DangerousHTML>
        </div>
        <Footer></Footer>
      </div>

      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 700px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-content {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            position: relative;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            left: 0px;
            width: 240px;
            bottom: -410px;
            height: 330px;
            position: absolute;
            object-fit: cover;
          }
          .home-title {
            color: rgb(18, 40, 33);
            font-size: 72px;
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
            line-height: 92px;
          }
          .home-description {
            color: rgb(18, 40, 33);
            font-size: 24px;
            max-width: 600px;
            font-family: Lato;
            line-height: 36px;
          }
          .home-text {
            font-size: 16px;
          }
          .home-text01 {
            color: #122821;
            font-size: 24px;
            font-family: Lato;
            line-height: 36px;
          }
          .home-text02 {
            font-size: 16px;
          }
          .home-text03 {
            color: #122821;
            font-size: 24px;
            font-family: Lato;
            line-height: 36px;
          }
          .home-image01 {
            width: 720px;
            height: 700px;
            display: flex;
            overflow-x: hidden;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
            background-color: rgba(250, 228, 142, 1);
          }
          .home-image02 {
            height: 100%;
            object-fit: cover;
          }
          .home-image03 {
            right: 0px;
            bottom: 0px;
            height: 390px;
            position: absolute;
            object-fit: cover;
          }
          .home-mission {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: 290px;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-text05 {
            color: rgb(18, 40, 33);
            font-size: 40px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
            line-height: 51px;
          }
          .home-text06 {
            font-size: 24px;
          }
          .home-text07 {
            font-size: 24px;
          }
          .home-text08 {
            font-size: 24px;
          }
          .home-text09 {
            color: #122821;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 51px;
          }
          .home-text10 {
            line-height: 21px;
          }
          .home-services {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-text11 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 56px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 500;
          }
          .home-cards {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-row {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: stretch;
          }
          .home-row1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-testimonials {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 110px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #122821;
          }
          .home-content1 {
            gap: 56px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image04 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-quote1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-author {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-name {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .home-origin {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .home-image05 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-quote3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-author1 {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .home-origin1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .home-image06 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-quote5 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-author2 {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .home-origin2 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .home-image07 {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-quote7 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 600px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-author3 {
            gap: 4px;
            flex: 1;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-name3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            max-width: 120px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            border-top-width: 1px;
          }
          .home-origin3 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 18px;
            max-width: 120px;
            text-align: center;
            font-family: Lato;
            line-height: 27px;
          }
          .home-controls {
            gap: var(--dl-space-space-oneandhalfunits);
            right: 0px;
            bottom: 0px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-previous {
            width: 64px;
            cursor: pointer;
            height: 64px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: flex-end;
            background-color: rgba(230, 249, 224, 0.5);
          }
          .home-previous:hover {
            background-color: #e6f9e0;
          }
          .home-image08 {
            width: 100px;
            transform: rotate(180deg);
            object-fit: cover;
          }
          .home-next {
            width: 64px;
            cursor: pointer;
            height: 64px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: flex-end;
            background-color: #e6f9e0;
          }
          .home-next:hover {
            background-color: rgba(230, 249, 224, 0.5);
          }
          .home-image09 {
            width: 100px;
            object-fit: cover;
          }
          .home-partners {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 130px;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 130px;
            border-bottom-width: 1px;
          }
          .home-content2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text26 {
            color: #122821;
            font-size: 56px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text27 {
            color: rgb(18, 40, 33);
            font-size: 20px;
            max-width: 300px;
            font-family: Lato;
            line-height: 30px;
          }
          .home-partners-desktop {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-column {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column01 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column02 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column03 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-partners-mobile {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-row2 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column04 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column05 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-column06 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-banner {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-container2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 110px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #122821;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title1 {
            color: rgb(230, 249, 224);
            width: 100%;
            font-size: 36px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 46px;
          }
          .home-description1 {
            color: rgb(230, 249, 224);
            width: 100%;
            font-size: 20px;
            max-width: 550px;
            text-align: center;
            font-family: Lato;
            line-height: 30px;
          }
          .home-galleries {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-gallery-desktop {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-column07 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image41 {
            height: 700px;
            object-fit: cover;
          }
          .home-column08 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-row3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-yellow {
            flex: 1;
            height: 330px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #fae48e;
          }
          .home-image42 {
            height: 330px;
            object-fit: cover;
          }
          .home-row4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image43 {
            width: 435px;
            object-fit: cover;
          }
          .home-image44 {
            height: 400px;
            object-fit: cover;
          }
          .home-gallery-mobile {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: none;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-column09 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-image45 {
            height: 700px;
            object-fit: cover;
          }
          .home-image46 {
            width: 435px;
            object-fit: cover;
          }
          .home-column10 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-yellow1 {
            flex: 1;
            height: 330px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #fae48e;
          }
          .home-image47 {
            height: 330px;
            object-fit: cover;
          }
          .home-row5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image48 {
            height: 400px;
            object-fit: cover;
          }
          .home-newsletter {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            border-color: var(--dl-color-gray-black);
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 120px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text31 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text32 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 20px;
            text-align: center;
            line-height: 30px;
          }
          .home-content3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-email {
            width: 400px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: 2px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 60px;
            padding-right: 2px;
            flex-direction: row;
            padding-bottom: 2px;
            justify-content: center;
            background-color: #f3f3f3;
          }
          .home-textinput {
            flex: 1;
            color: #122821;
            outline: inherit;
            font-family: Lato;
            font-weight: 600;
            background-color: transparent;
          }
          .home-submit {
            width: 56px;
            cursor: pointer;
            height: 56px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #122821;
          }
          .home-submit:hover {
            background-color: #408770;
          }
          .home-image49 {
            width: 18px;
            filter: brightness(0) saturate(100%) invert(88%) sepia(8%)
              saturate(484%) hue-rotate(62deg) brightness(111%) contrast(95%);
            transform: rotate(-45deg);
            object-fit: cover;
          }
          .home-notice {
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            padding-left: 27px;
            flex-direction: column;
            justify-content: center;
          }
          .home-notice1 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 12px;
            max-width: 305px;
            font-family: Lato;
            line-height: 15px;
          }
          @media (max-width: 991px) {
            .home-hero {
              gap: var(--dl-space-space-threeunits);
              height: auto;
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-image {
              display: none;
            }
            .home-image01 {
              width: 100%;
              height: auto;
              position: static;
              align-items: flex-end;
              aspect-ratio: 1;
              justify-content: flex-start;
            }
            .home-image03 {
              right: 23px;
              bottom: 0px;
              height: 430px;
              position: absolute;
            }
            .home-mission {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text05 {
              font-size: 18px;
              text-align: center;
              line-height: 23px;
            }
            .home-text06 {
              font-size: 18px;
              text-align: center;
              line-height: 23px;
            }
            .home-button {
              width: 100%;
              text-align: center;
            }
            .home-text10 {
              font-family: Lato;
            }
            .home-services {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-text11 {
              max-width: 500px;
              text-align: center;
            }
            .home-cards {
              flex-direction: column;
            }
            .home-testimonials {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-controls {
              position: static;
            }
            .home-partners {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: 60px;
            }
            .home-content2 {
              align-items: center;
              justify-content: center;
            }
            .home-text26 {
              text-align: center;
            }
            .home-text27 {
              text-align: center;
            }
            .home-partners-desktop {
              display: none;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-column {
              flex-direction: row;
            }
            .home-column01 {
              flex-direction: row;
            }
            .home-column02 {
              flex-direction: row;
            }
            .home-column03 {
              flex-direction: row;
            }
            .home-partners-mobile {
              gap: 10px;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-row2 {
              gap: 10px;
              flex-direction: row;
            }
            .home-column04 {
              gap: 10px;
              flex-direction: row;
            }
            .home-column05 {
              gap: 10px;
              flex-direction: row;
            }
            .home-column06 {
              gap: 10px;
              flex-direction: row;
            }
            .home-banner {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-gallery-desktop {
              display: none;
            }
            .home-gallery-mobile {
              gap: var(--dl-space-space-halfunit);
              display: flex;
            }
            .home-column09 {
              gap: var(--dl-space-space-halfunit);
              align-items: flex-end;
            }
            .home-image45 {
              width: 280px;
              height: 400px;
            }
            .home-image46 {
              width: 240px;
            }
            .home-column10 {
              align-items: flex-start;
            }
            .home-yellow1 {
              flex: 0 0 auto;
              width: 220px;
              height: 300px;
            }
            .home-image47 {
              width: 260px;
              height: 170px;
            }
            .home-image48 {
              width: 220px;
              height: 290px;
            }
            .home-newsletter {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text31 {
              font-size: 32px;
            }
            .home-text32 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-notice1 {
              font-size: 10px;
              line-height: 13px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 36px;
              line-height: 46px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text02 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text04 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image03 {
              height: 300px;
            }
            .home-mission {
              align-items: center;
            }
            .home-content2 {
              align-items: center;
            }
            .home-text27 {
              max-width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .home-image03 {
              height: 170px;
            }
            .home-row {
              flex-direction: column;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-container1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image04 {
              width: 60px;
              height: 60px;
            }
            .home-quote1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-author {
              gap: var(--dl-space-space-halfunit);
            }
            .home-name {
              width: 120px;
              font-size: 16px;
            }
            .home-origin {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image05 {
              width: 60px;
              height: 60px;
            }
            .home-quote3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text12 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-author1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-name1 {
              width: 120px;
              font-size: 16px;
            }
            .home-origin1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image06 {
              width: 60px;
              height: 60px;
            }
            .home-quote5 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-author2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-name2 {
              width: 120px;
              font-size: 16px;
            }
            .home-origin2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image07 {
              width: 60px;
              height: 60px;
            }
            .home-quote7 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text22 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-author3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-name3 {
              width: 120px;
              font-size: 16px;
            }
            .home-origin3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-previous {
              width: 40px;
              height: 40px;
              padding: 0px;
              justify-content: center;
            }
            .home-image08 {
              width: 11px;
            }
            .home-next {
              width: 40px;
              height: 40px;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              justify-content: center;
            }
            .home-image09 {
              width: 11px;
            }
            .home-partners {
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title1 {
              font-size: 32px;
              line-height: 41px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image45 {
              width: 140px;
              height: 200px;
            }
            .home-image46 {
              width: 120px;
            }
            .home-yellow1 {
              width: 110px;
              height: 150px;
            }
            .home-image47 {
              width: 130px;
              height: 85px;
            }
            .home-image48 {
              width: 110px;
              height: 145px;
            }
            .home-email {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
