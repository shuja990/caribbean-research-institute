import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const BlogPost = (props) => {
  return (
    <>
      <div className="blog-post-container">
        <Head>
          <title>BlogPost - Caribbean Research Institute</title>
          <meta property="og:title" content="BlogPost - Caribbean Research Institute" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="blog-post-blog-post-card">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&amp;ixlib=rb-1.2.1&amp;w=1000"
            className="blog-post-image"
          />
          <div className="blog-post-container1">
            <span className="blog-post-text">JULY 24</span>
            <span className="blog-post-text1">
              Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </span>
            <div className="blog-post-separator"></div>
            <span className="blog-post-text2">Food &amp; Drink</span>
          </div>
        </div>
        <div className="blog-post-container2">
          <span className="blog-post-text3">
            <span>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </span>
            <br></br>
            <br></br>
            <span>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains.
            </span>
            <br></br>
          </span>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .blog-post-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-image {
            width: 100%;
            height: 100%;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .blog-post-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-text {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-text1 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
          }
          .blog-post-separator {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .blog-post-text2 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .blog-post-container2 {
            width: 95%;
            height: 100%;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .blog-post-text3 {
            padding: var(--dl-space-space-unit);
            text-align: justify;
          }
        `}
      </style>
    </>
  )
}

export default BlogPost
