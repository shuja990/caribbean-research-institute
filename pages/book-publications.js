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
import { Card } from "react-bootstrap";

const MyTeam = (props) => {
    const data = {
        "book1": [
            {
                "Title": "Native Landscapes - An Anthology of Caribbean Short Stories ed. V. Clarke",
                "Description": "A fascinating and long-awaited anthology of short fiction from the 'lost generation' of Caribbean Writers in the USA. In this landmark volume, the stories are set in the Caribbean and Edward Kamau Brathwaite joins the new writers of this Anthology which is flavored with magical realism and nostalgia.",
                "ISBN": "ISBN 1-87433-03-2",
                "Price": "$7.50"
            },
            {
                "Title": "The Fever of the Years - E. B Baisden",
                "Description": "A collection of short stories produced as the annual features of the Creative Writers Series (A follow-up to Native Landscapes) it is a fascinating volume that steps boldly into the magical realist tradition.",
                "ISBN": "ISBN 1-87433-06-7",
                "Price": "$7.50"
            },
            {
                "Title": "Big Business and Other Plays by V.B Browne - ed. J A. G Irish",
                "Description": "Three works specially edited for schools with an Introduction and Study guide, raising questions about youth, family, values, and attitudes in truly entertaining comedy.",
                "ISBN": "ISBN 1-87433-09-1",
                "Price": "$10.00"
            },
            {
                "Title": "Exiled Within – Donnette Nurse",
                "Description": "An exploration of challenges of parenting, marriage, love, youth, puberty, aging, death, and loneliness.",
                "ISBN": "ISBN 1-878-433-12-3",
                "Price": "$10.00"
            },
            {
                "Title": "There is an Isle Somewhere - ed. J..A, G Irish",
                "Description": "Anthology of Caribbean Poetry featuring selections by Guillen, Dawn Noel, Donnette Nurse, Maxwell Haywood, and J.A.G Irish, focusing on questions of the Caribbean multicultural experience, colonialism, childhood, etc.",
                "ISBN": "ISBN 1-87433-10-5",
                "Price": "$10.00"
            },
            {
                "Title": "An Old Woman Remembers – Carlos Russell",
                "Description": "A narrative monologue that raises questions about life, politics, education, culture, self-concept, social equity, religion, family, language, and stereotypes as they relate to identity and power.",
                "ISBN": "ISBN 1-878-433-20-2",
                "Price": "$10.00"
            }
        ],
        "book2": [
            {
                "Title": "Adjustment of Caribbean Immigrants in New York - Social & Economic Dimensions – ed ed. V. Clarke/ V Udeogalanya",
                "Description": "An examination of social concerns of the 1980s.",
                "ISBN": "ISBN 1-878433-02-4",
                "Price": "$5.00"
            },
            {
                "Title": "Establishing New Lives: Selected Readings on Caribbean Immigrants in New York City – ed. V. Clarke/ E.W. Riviere",
                "Description": "This examines stresses within immigrant families and between individuals as resocialization clashes with such basic assumptions as gender roles. This volume also describes the psychological features of alienation and the manner in which Caribbean immigrants come to terms with the problems of housing, employment, child care, and as consumers.",
                "ISBN": "ISBN 1-878433-00-8",
                "Price": "$15.00"
            },
            {
                "Title": "Political Behavior & Social Interaction among Black American Residents in Brooklyn - ed. JA. G Irish / E.W. Riviere",
                "Description": "This volume explores the Caribbean immigrants’ political behavior, their past and present roles in black politics, the present cooperation and conflicts between Caribbean and African Americans, and the ongoing impact of these changes in the sensitive political arena.",
                "ISBN": "ISBN 1-878433-04-0",
                "Price": "$15.00"
            },
            {
                "Title": "Caribbean Immigrants and Economic Adaptation: A Caribbean Business Survey - Martin Afflick",
                "Description": "The survey provides information on characteristics, operations, problems, and needs of Caribbean businesses in New York City.",
                "Price": "$5.00"
            },
            {
                "Title": "Perspectives for Alliouagana - J.A. G Irish",
                "Description": "A tribute to Mme Annie Cummings Greenaway: A collection of major speeches on public issues such as Self and Community Awareness, Creative Arts since Emancipation, Teachers, Nation-Building, the Private and Service sectors in a Mini State, National Development, University Continuing Education, and the Caribbean Diaspora.",
                "ISBN": "ISBN 976-8039-01-9",
                "Price": "$7.50"
            },
            {
                "Title": "Further Perspectives for Alliouagana –J.A. G Irish",
                "Description": "Focus on public issues in a mini-state, development strategies, foreign aid, etc.",
                "ISBN": "ISBN 976-8039-07-8",
                "Price": "$10.00"
            },
            {
                "Title": "Life in A Colonial Crucible J.A. G. Irish",
                "Description": "Labor and Social Change in Montserrat- 1946 to present. An examination of labor's political role in shaping the economy of a colonial microstate that rejects independence in the era of decolonization.",
                "ISBN": "ISBN 976-8038-04-3",
                "Price": "$15.00"
            },
            {
                "Title": "Caribbean Diplomacy: Focus on Washington, Cuba & the Post-Cold War – Jacqueline Braveboy-Wagner",
                "Description": "A collection of essays that address the role of the Caribbean in the international arena.",
                "ISBN": "ISBN 1-878433-15-6",
                "Price": "$10.00"
            },
            {
                "Title": "Inward Stretch - Outward Reach – Professor Rex Nettleford",
                "Description": "A collection of essays on the Caribbean, its crises and challenges, global learning, cultural identity and resistance, and Garvey's legacy.",
                "ISBN": "ISBN 1-878433-19-9",
                "Price": "$15.00"
            },
            {
                "Title": "New Peoples in the City: Caribbean Immigration into the United States - Velta J Clarke",
                "Description": "A search into sociocultural, educational, political, and economical integration of Caribbean peoples into the USA.",
                "ISBN": "ISBN 1-878-433-18-0",
                "Price": "$10.00"
            }
        ],
        "book3": [
            {
                "Title": "Visions of Liberation in the Caribbean – J A G. Irish",
                "Description": "A study of liberation issues in Cuba, Puerto Rico, Dominican Republic, Haiti, and the West Indies, concerning emancipation, revolution, nationalism, magical realism, negrismo, identity, and the role of academia.",
                "ISBN": "ISBN 976-8039-06-X",
                "Price": "$10.00"
            },
            {
                "Title": "Nicolás Guillén: Growth of a Revolutionary Consciousness -.J .A. G. Irish",
                "Description": "A study on Cuba's National Poet - Nicolás Guillén and his articulation of a social cultural consciousness among blacks in Cuba through poetry and journalism.",
                "ISBN": "ISBN 976-8039-05-1",
                "Price": "$10.00"
            }
        ],
        "book4": [
            {
                "Title": "Handbook for Immigrants: Some Educational & Social Issues in the USA - . McNicol/T Thomas/J.A. G Irish",
                "Description": "An immigrant handbook on some basic educational and social issues in the USA.",
                "ISBN": "ISBN 1-87433-08-3",
                "Price": "$7.50"
            },
            {
                "Title": "From Jamaican Creole to Standard English - Velma Pollard",
                "Description": "A manual to guide teachers of English in developing a creative approach to helping West Indian students master Standard English.",
                "ISBN": "ISBN 1-878433-01-6",
                "Price": "$15.00"
            },
            {
                "Title": "Caribbean Heritage Resource Guide - ed. J A G Irish",
                "Description": "A reference manual for teachers that introduces materials in Language, Literature, Social Studies, Films and Videos.",
                "ISBN": "ISBN 1-87433-16-4",
                "Price": "$10.00"
            },
            {
                "Title": "Adjustment of Caribbean Immigrants in New York: Educational Dimensions – ed .V. Clarke/ B. Obebe",
                "Description": "Recommendations are made for developing educational and cultural awareness programs which will enhance learning and promote self-esteem.",
                "ISBN": "ISBN 1-87433-01-6",
                "Price": "$5.00"
            },
            {
                "Title": "Garifuna Folk Tales -,Jessie Castillo",
                "Description": "Short stories with illustrations in English and Garifuna.",
                "ISBN": "ISBN 1-878433-11-3",
                "Price": "$10.00"
            },
            {
                "Title": "Medgar Evers College - In Relentless Pursuit of Excellence: Policy Statements by Edison 0 Jackson - ed J. A. G Irish",
                "Description": "A collection of major speeches by the President of Medgar Evers College, Dr. Edison 0 Jackson setting a new agenda for the college. Part II identifies the specific role of the CRC within the college.",
                "ISBN": "ISBN 1-878433-13-X",
                "Price": "$10.00"
            },
            {
                "Title": "Assessment of Caribbean Students - J A. G Irish/Dr. C. Clay",
                "Description": "Guidelines for approaches to the authentic assessment of Caribbean immigrant students.",
                "ISBN": "ISBN 1-787433-21-0",
                "Price": "$10.00"
            },
            {
                "Title": "Caribbean Students in New York - J.A G.Irish",
                "Description": "A collection of occasional papers introducing the broad aspects of major issues and concerns of Caribbean student population in the public schools of New York.",
                "ISBN": "ISBN 1-878433-17-2",
                "Price": "$10.00"
            }
        ]
    }

    return (
        <>
            <div className="">
                <Head>
                    <title>Book Publications - Caribbean Research Institute</title>
                    <meta
                        property="og:title"
                        content="Book Publications - Caribbean Research Institute"
                    />
                </Head>
                <Navbar rootClassName="navbar-root-class-name5"></Navbar>
                <div className="history-history">
                    <h1 className="gallery-text">Book Publications</h1>
                </div>
                <div className="history-history">
                    <h3 className="text-center">CARIBBEAN DIASPORA PRESS (CDP)</h3>
                    <h4>
                        Our Mission
                    </h4>
                    <ul>
                        <li>Small not-for-profit academic press focusing on Caribbean-American immigrant life, with a view to provide public information that will inform decision-making, the advancement of educational and social policy, and the improvement and enrichment of community life and development.</li>
                        <li>Focus will be on the publication of results of scholarly research and creative writing dealing with the immigrant experience, and general educational and cultural materials that promote greater awareness of history, ethnic heritage and developmental potential of a people.</li>

                    </ul>
                    <h4>
                        OBJECTIVES
                    </h4>
                    <ul>
                        <li>
                            To identify promising creative writers and young scholars whose work may not appeal to commercial publishers, but whose work merits serious consideration and exposure because both the focus and the quality represent a significant contribution to scholarship, human knowledge, and community awareness and enhancement.
                        </li>
                        <li>
                            To publish such specific research and creative work, as well as works on related themes about the general human experience of migration, development, multi-culturalism, ethnicity, empowerment, and identity inter alia.
                        </li>
                        <li>
                            Distribution of these publications will be primarily to libraries, educational institutions, and community organizations. Funds derived from such distributions will be for the purpose of recovering costs and expanding the work of the corporation. The public will also have access to publications.
                        </li>
                        <li>
                            Fundraising to support the purposes of the corporation will take the form of donations, social activities, and promotional outreach.
                        </li>
                        <li>
                            <sup>1</sup> Not open to the public for membership but shall be open for sponsorship and support from individuals, groups, corporations, and foundations.
                        </li>
                    </ul>
                    <h3 className="text-center">
                        CREATIVE WRITERS' SERIES:
                    </h3>
                    <div className="">
                        {data.book1.map((book, index) => (
                            <BookCard
                                key={index}
                                title={book.Title}
                                description={book.Description}
                                isbn={book.ISBN}
                                price={book.Price}
                            />
                        ))}
                    </div>
                    <h3 className="text-center">
                        SOCIAL & ECONOMIC STUDIES
                    </h3>
                    <div className="">
                        {data.book2.map((book, index) => (
                            <BookCard
                                key={index}
                                title={book.Title}
                                description={book.Description}
                                isbn={book.ISBN}
                                price={book.Price}
                            />
                        ))}
                    </div>
                    <h3 className="text-center">
                        LITERARY CRITICISM
                    </h3>
                    <div className="">
                        {data.book3.map((book, index) => (
                            <BookCard
                                key={index}
                                title={book.Title}
                                description={book.Description}
                                isbn={book.ISBN}
                                price={book.Price}
                            />
                        ))}
                    </div>
                    <h3 className="text-center">
                        EDUCATION & CULTURE:
                    </h3>
                    <div className="">
                        {data.book4.map((book, index) => (
                            <BookCard
                                key={index}
                                title={book.Title}
                                description={book.Description}
                                isbn={book.ISBN}
                                price={book.Price}
                            />
                        ))}
                    </div>
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


function BookCard({ title, description, isbn, price }) {
    return (
        <Card className="m-2">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">ISBN: {isbn}</small>
                <div className="price">${price}</div>
            </Card.Footer>
        </Card>
    );
}

export default MyTeam;
