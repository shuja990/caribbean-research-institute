import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Services from '../components/services'
import Footer from '../components/footer'

const News = (props) => {
  return (
    <>
      <div className="news-container">
        <Head>
          <title>News - Caribbean Research Institute</title>
          <meta property="og:title" content="News - Caribbean Research Institute" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <Services rootClassName="services-root-class-name"></Services>
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
        `}
      </style>
    </>
  )
}

export default News
