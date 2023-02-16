import React from "react";
import Head from "next/head";
import Rev from "../public/playground_assets/reverend.jpg";
import Ken from "../public/playground_assets/ken.jpg";
import Jul from "../public/playground_assets/julia.jpg";
import Vivian from "../public/playground_assets/vivian.jpg";
import Eug from "../public/playground_assets/eug.jpg";
import Sasha from "../public/playground_assets/sasha.jpg";

import Navbar from "../components/navbar";
import BlogPostCard2 from "../components/blog-post-card2";

const MyTeam = (props) => {
  const data = [
    {
      title: "Rt. Reverend Sylveta A.  Hamilton-Gonzales",
      label: "",
      description:
        "Bishop Sylveta Hamilton-Gonzales is the founder and bishop of  QKingdom Ministries, a New York-based interfaith community  organization that includes a scholarship foundation, a school of  science and technology, and an interfaith academy. Bishop  Hamilton-Gonzales has a background in psychology and religion  and has earned degrees from the College of New Rochelle, the  New York Theological Seminary, and Princeton Seminary. She  has been appointed as a human rights commissioner, serves as  the chair of the Caribbean Research Center, and has been  recognized as one of the 500 greatest geniuses of the 21st  century and one of the top 100 educators in 2006. Bishop  Hamilton-Gonzales is a dynamic leader and a well-known  educator and motivational speaker.",
      image: Rev,
    },
    {
      title: "Dr. Ken I rish-Bramble",
      label: "",
      description:
        "Ken Irish-Bramble, was born to Montserratian parents in  Marigott, St. Martin. Dr. Irish-Bramble currently holds a BA in  Political Science from the City University of New York (CUNY); a  MA in Comparative Politics from New York University (NYU); a  MA in Secondary Education from Pace University and; a Ph.D. in  Comparative Politics from NYU. Dr. Irish-Bramble has worked in a  variety of not-for-profit and government agencies as an educator,  community advocate, researcher, service coordinator, athletic  coach, and advisor. He has served as an Adjunct Associate  Professor in the Department of Social and Behavioral Sciences  for twenty years. Current Executive Director of the Caribbean  Research Center at Medgar Evers College (CRC).",
      image: Ken,
    },
    {
      title: "Mrs. Julianna Bacchus-  Edmondson",
      label: "",
      description:
        "Julianna Bacchus-Edmondson is an Administrative Specialist at  the Caribbean Research Center with over 15 years of experience  in Higher Education Administration. She holds a Master of  Science in Business Management and Leadership from the CUNY  School of Professional Studies and a Bachelor of Science in  Business Administration with a concentration in Marketing from  Medgar Evers College. She is also working on an Advance  Certificate in Project Management. During her time at Medgar  Evers College, she mentored high school students and  advocated on behalf of programs related to HIV/AIDS and  teenage pregnancy. Julianna was born and raised in St. Vincent  and the Grenadines and currently lives in Brooklyn with her  husband and two children.",
      image: Jul,
    },
    {
      title: "Ms. Vivian E. Burns",
      label: "",
      description:
        "Ms. Vivian E. Burns is the Office Manager of the Office of the  Caribbean Research Center. She is responsible for managing the  day-to-day operations of the physical office, including visitor  logs, management of the reading/research room, and circulation  and data of books for social and economic purposes. She also  provides administrative support to the Executive Director and  Administrative Specialist. Ms. Burns is working to digitize files,  videos, documents, and reports to create a digital archive and  strives to maintain a professional image while working with  faculty, staff, and students. She is an undergraduate from CUNY  Medgar Evers College with degrees in Public Policy and Law and  Public Administration and is pursuing a Master's degree in Labor  and Urban Studies.",
      image: Vivian,
    },
    {
      title: "Mr. Eugene M. Pursoo",
      label: "",
      description:
        "Eugene Maurice Pursoo served as Grenada's  Ambassador/Permanent Representative to the United Nations  (1990-1995). At the UN he was elected Vice President of the forty-  eight session of the UN General Assembly (1993); Chairman of the  UN Decolonization Committee (1994); and Chairman of the  Alliance of Small Island States (1994). Following his stint at the  United Nations, Mr. Pursoo Served as a Distinguished Lecturer  and deputy chair in the Department of Public Administration at  Medgar Evers College of the City University of New York. He then  served as Director of	International Education. Among his  accomplishments at Medgar Evers College is the establishment  of the USA-Caribbean International Education Consortium. The  consortium explores ways of using Education as a mechanism to  address developmental challenges confronting developing  countries.",
      image: Eug,
    },
    {
      title: "Ms. Sasha Richardson",
      label: "",
      description:
        "Sasha Richardson works as a Media and Archivist Intern with the Caribbean  Research Center. Sasha is a native of Kingston, Jamaica. She is  currently a first-year master’s student at Baruch College’s Zicklin  School of Business, pursuing a degree in Business Analytics. Before this, she obtained her bachelor’s degree in Computer Science from Fayetteville State University in North Carolina. Sasha has spent her academic and professional  career immersing herself in data analysis, big data, and research.  She aspires to explore the combined use of data-driven  predictions and human insights to solve tangible and significant  problems that affect the way we live.",
      image: Sasha,
    },
  ];
  return (
    <>
      <div className="">
        <Head>
          <title>Our Team - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="Our Team - Caribbean Research Institute"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
        <div className="gallery-gallery">
          <h1 className="gallery-text">Our Team</h1>
        </div>
        <div className="my-team-blog">
          <div className="my-team-container1">
            {data.map((mem) => (
              <BlogPostCard2
                title={mem.title}
                label={""}
                description={mem.description}
                image_src={mem.image}
                rootClassName="rootClassName3"
              ></BlogPostCard2>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-gallery {
            width: 100%;
            display: flex;
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
            color: var(--dl-color-gray-700);
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
          .my-team-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .my-team-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .my-team-container1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 767px) {
            .my-team-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .my-team-blog {
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

export default MyTeam;
