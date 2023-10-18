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
import Footer from "../components/footer";

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
                    <title>Our History - Caribbean Research Institute</title>
                    <meta
                        property="og:title"
                        content="Our History - Caribbean Research Institute"
                    />
                </Head>
                <Navbar rootClassName="navbar-root-class-name5"></Navbar>
                <div className="history-history">
                    <h1 className="gallery-text">Our History</h1>
                </div>
                <div className="history-history">
                    <p>
                        Established in 1985, the Caribbean Research Center (CRC) has executed its mission of providing a multidisciplinary understanding of the New York social environment from the perspective of the diverse social, cultural, and economic characteristics of the Caribbean-American community, and analysis of the immigrant and migrant experiences of this community in the context of the wider Caribbean Diasporas in the Americas and Europe. This has been done through research, policy development, and community engagement.
                        Research has focused on issues of adjustment, such as educational challenges, family relationships, gender and health issues, small business activity, and political behavior and social interaction. This research has been linked to academic advancement that included university level curriculum creation, and has motivated areas of policy development.
                        Policy development generated an Education Task Force that brought together a broad group of Caribbean educators, linguists, psychologists, psychotherapists, social workers, parents and community leaders to address issues of low academic performance and behavior by Caribbean students in the public schools. The Center also created the Family Support Services Unit to provide training, advocacy, and counseling to families whose children were being excessively suspended from school, or being inappropriately placed in Special Education tracks. The Center also simultaneously initiated the Prison Inreach/Outreach Project which offered weekly seminars to Caribbean inmates and an opportunity for them to maintain connections with family members in preparation for their reintegration into family and society upon their release from prison. The CRC was also actively involved in the public education system through representation by its Director on the New York City Board of Education Commission on Students of African Ancestry, and the New York State Board of regents Advisory Council and Visiting Committee on Low Performing Schools.
                        The Center has also pursued an international agenda that has incorporated the international distribution of Wadabagei through the appointment of European, Canadian, and Caribbean Associate Editors, the signing of a contract for publication and global distribution with Lexington Books, and membership in The Association of Caribbean Universities and Research Institutes (UNICA). Wadabagei, is the Center’s peer-reviewed journal that serves to facilitate the exchange of ideas among intellectuals in the Unites States and through-out the African Diaspora with special focus on the Caribbean Basin. The Center has also participated in national and international conferences such as the Annual Foreign Affairs Advisors’ Conference of the Ralph J. Bunche International Affairs Center and the Charles B. Rangel International Affairs Program, United Nations conference on Small Island Developing States, and the United Nations conference on the Elimination of Racism and Poverty
                        More recently (2012-2019), the CRC has hosted the Shirley Chisholm Conference which is held to honor the legacy and impact of the Honorable Shirley Chisholm, the first Black woman elected to the House of Representatives and the first Black woman to run for the presidential nomination on the Democratic ticket. Past recipients of the Shirley Chisholm Award include Yvette Clarke, Tish James, and Laurie Cumbo. The 2019 conference was one of the most successful and was funded through external donations. The Center also started a Black Solidarity Day in 2018 and is committed to making it an annual event. The CRC is currently planning to revive the debate competition that it has staged in prior years. The competition would involve international and Medgar Evers College teams.

                    </p>
                    <h3 className="text-center">CHALLENGES</h3>
                    <h4>Funding</h4>
                    <p>
                        The Center was funded in its early years - 1985 to 1995 - by annual appropriations from the New York State legislature, to address the concerns, problems and needs of the rapidly growing Caribbean segment of the metropolitan New York State population. The Center no longer receives State Funding. It has also not been supported by City Council grants or City Council Discretionary funds.
                    </p>
                    <h4>Staffing</h4>
                    <p>
                        The operational capacity of the Center would be greatly improved by the addition of another staff member. This would allow the Manager to allocate more time to primary tasks such as fundraising and research development.
                    </p>
                    <h3 className="text-center">
                        Thirty years of Service to the Caribbean Diaspora:
                    </h3>
                    <p>
                        The Transitional Institute at the Caribbean Research Center is geared to help students at the time of arrival.  It will provide counseling and orientation about procedures for school registration, evaluation of school records from home country, and assessment of new students for proper class placement.
                        <br />
                        The program will work with students for the first three years of their stay here to monitor their progress as new immigrants.
                        <br />
                        The program works with the teachers in workshops to increase sensitivity to the social and cultural background of the students and to provide information about the educational system from which they have come.
                        <br />
                        Work with teachers also involves the collective development of curriculum materials, instructional strategies and assessment tools that can provide better results with Caribbean students, in accordance with new educational standards for graduation and college entry.
                        <br />
                        The program works with families to assist parents to get actively involved in their children's education.  This means helping parents to understand how the school system here works and what it demands of both students and parents for the students to succeed.
                        <br />
                        It will provide guidance for families on delicate questions such as discipline, suspensions, Special Education placement, child neglect and abuse, attendance, testing, college preparation and career selection.
                    </p>
                    <h3 className="text-center">
                        PARENT EMPOWERMENT PROGRAM
                    </h3>
                    <p>
                        The Parent Empowerment Program (PEP) is geared to provide orientation and support for Immigrant parents in the process of transition and adjustment of life in the United States.  The Center will conduct Workshops on the following topics:
                    </p>
                    <ul>
                        <li>Orientation of New Arrivals</li>
                        <li>Legal and Immigration Concerns</li>
                        <li>Reunification of Families</li>
                        <li>Education for Success</li>
                        <li>Discipline and Self-Esteem</li>
                        <li>Child Neglect, Abuse, Foster Care and PINS</li>
                        <li>Understanding Testing and Assessment</li>
                        <li>College Preparation/Career Selection</li>
                        <li>Health Services</li>
                        <li>Community Services</li>
                        <li>Effective Political Representation</li>
                    </ul>
                    <h3 className="text-center">
                        FAMILY SUPPORT SERVICES UNIT
                    </h3>
                    <p>
                        The Family Support Services Unit is the outgrowth of an expanded Transitional Institute for New Immigrants.  The purpose of this unit is to address the needs of resident Caribbean families whose children are experiencing challenges, particularly in the education system where their academic and behavioral difficulties result in their placement in Special Education classes, suspensions or records of low achievement.
                        <br /><br />
                        Research findings indicate that the main adjustment difficulties experienced by new immigrants are social and cultural, involving both the school environment and the wider social milieu marked by stereotypes and racial discrimination (Grant & Anderson, 1987).  In the US as in Canada, there is on the part of Caribbean parents, a lack of knowledge of the school system in North America, and other institutions which will facilitate the child's settlement and integration.  Similarly, there is a lack of knowledge of the West Indian school system and the migration experience on the part of teachers in the North American school systems.
                        <br /><br />
                        The role of schools in the settlement and adjustment process is articulated by Grant and Anderson (1987):
                        <br /><br />
                        <q>The school is a sub-system, within the larger system of society, revealing in varied combinations, several phases of the assimilative process, but also as a sub-system, in that society presents the new comer its own dynamics of adjustment difficulties.  The physical environment, the social interaction networks, the teaching, learning process, the entire character of the school.  All these are challenges within the school to which the newcomer must face up and find answers.</q>
                        <br /><br />
                        In addition, there are also adjustment problems and a range of family and social issues, connected with family relationships, such as separation, reunification, and family conflict.
                        <br /><br />
                        These factors described earlier illustrate the need for services which support families in the successful transition of immigrant children from the education system to the economic and social systems.
                    </p>
                    <h3 className="text-center">
                        BEACON PROJECT                    </h3>
                    <p>
                        The Caribbean Research Center, Medgar Evers College was awarded a grant to continue its Beacon Projects.  The project is a mayoral initiative aimed at revitalizing the Flatbush Community.  It offers a safe haven and positive program geared to the entire family on a seven-day-a-week basis.  The project has just entered its fifth year.
                        <br />
                        <br />
                        Some of its objectives are to provide educational programs that will enhance the quality of life of children, youth and adults in the Flatbush community and to foster community based partnerships by bringing together a dynamic coalition of students, parents, teachers, school administrators, civic and governmental agencies, health and medical organizations and the media.
                        <br />
                        <br />
                        Some aspects of its Program of activities are:
                    </p>
                    <ul>
                        <li>World acclaimed computer software in Math, Science, Geography, Reading, etc.</li>
                        <li>Self-esteem/Leadership Workshops</li>
                        <li>Recreation/Sports/Arts and Crafts/Music</li>
                        <li>Specialized, Motivational trips and Multicultural activities</li>
                        <li>Family Life Workshops and Intergenerational Activities</li>
                        <li>GED classes for adults</li>
                        <li>Drop-in counseling for young people/Family Counseling/Discussion on community issues</li>
                    </ul>
                    <p>Project Director: Andre Lake</p>
                    <h3 className="text-center">
                        ADOPT-A-FAMILY PROJECT
                    </h3>
                    <p>
                        The Caribbean Research Center (CRC) of Medgar Evers College (CUNY) and The Montserrat Progressive Society of New York, Inc.  (MPS-NY, Inc) in collaboration with Montserrat Foundation, Inc., have developed the ADOPT-A-FAMILY PROJECT to directly impact upon the on-going state of affairs on the island of Montserrat. Volcanic activity over the past five years has completely decimated the economic viability of the people of Montserrat.  Montserrat has been experiencing volcanic activity since July 1995.
                        <br /><br />
                        There have been on-going efforts to provide food and monetary contribution to Montserratians.  Those Montserrat who remained on island and to those experiencing adjustment and social problems on neighboring islands (Antigua, Guadeloupe, Dominica, St. Kitts/Nevis, etc.). The ADOPT-A-FAMILY PROJECT gives you the opportunity to provide financial and other support to a specific family regardless of their location, Your contribution(s) may be made directly to the family or, for tax deductible purposes, contributions must be made payable to: Montserrat Disaster Relief Fund. Our existing tax-exempt account through the Montserrat Foundation, Inc.
                        <br /><br />
                        You may contact either of the following: Vera Weekes, 718. 270-6080/6081 or Ashton Daly, President, MPS-NY, Inc., and Member, Board of Trustees, Montserrat Foundation, Inc., at 212.283-3346.
                    </p>
                    <h3 className="text-center">
                        Caribbean – African Unity – Prison Outreach
                    </h3>
                    <p>
                        As far back as 1992, the idea of a Caribbean African Unity Outreach/Inreach organization was born.  The purposes were to assist those families that were left behind when their loved ones were incarcerated, and to provide assistance to those incarcerated through educational and cultural programs.  It is hoped that this organization would be the springboard that would help them reclaim their place in society once they are released.
                        <br /><br />
                        The Center has over the past four years tried to implement the educational aspect of the program.  Help is now needed to continue the program.
                        <br /><br />
                        Our main focus is to invite other community organizations and individuals to join the Center in its thrust for greater outreach to the families and the prisoners.
                        <br /><br />
                        Four areas of activities being planned are: Social/Outreach; Legal; Education and Administration.
                    </p>
                </div>
                <Footer rootClassName="footer-root-class-name1"></Footer>
            </div>
            <style jsx>
                {`
          .history-history {
            width: 100%;
            display: flex;
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
