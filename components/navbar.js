import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-navbar ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div className="navbar-branding">
            <Link href="/">
              <a className="navbar-link">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="navbar-image"
                />
              </a>
            </Link>
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 128h768v768h-768z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-desktop-menu"
          >
            <nav className="navbar-links">
              <button className="navbar-button button">
                <Link href="/news">
                  <a className="navbar-link1">{props.text}</a>
                </Link>
              </button>
              <button className="navbar-button1 button">
                <Link href="/events">
                  <a className="navbar-link2">{props.text1}</a>
                </Link>
              </button>
              <button className="navbar-button2 button">
                <span>{props.text2}</span>
              </button>
              <Link href="/team">
                <a className="navbar-link3 button">
                  <span>Team</span>
                </a>
              </Link>
              <Link href="/gallery">
                <a className="navbar-link3 button">
                  <span>{props.text3}</span>
                </a>
              </Link>
              <button className="navbar-button4 button">
                <span>{props.text4}</span>
              </button>
              <Link href="/contact">
                <a className="navbar-link3 button">
                  <span>{'Contact Us'}</span>
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <img
              alt={props.Hamburger_alt}
              src={props.Hamburger_src}
              className="navbar-hamburger"
            />
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-top">
              <div className="navbar-branding1">
                <Link href="/">
                  <a className="navbar-link4">{props.text5}</a>
                </Link>
                <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                  <path d="M128 128h768v768h-768z"></path>
                </svg>
              </div>
              <div data-thq="thq-close-menu" className="navbar-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <Link href="/">
                <a className="navbar-link5 button">
                  <span>{props.text7}</span>
                </a>
              </Link>
              <Link href="/news">
                <a className="navbar-link6 button">
                  <span>{props.text8}</span>
                </a>
              </Link>
              <Link href="/events">
                <a className="navbar-link7 button">
                  <span>{props.text82}</span>
                </a>
              </Link>
              <Link href="/team">
                <a className="navbar-link7 button">
                  <span>Team</span>
                </a>
              </Link>
              <button className="navbar-button5 button">
                <span>{props.text81}</span>
              </button>
              <Link href="/gallery">
                <a className="navbar-link8 button">
                  <span>{props.text812}</span>
                </a>
              </Link>
              <button className="navbar-button6 button">
                <span>{props.text811}</span>
              </button>
              <Link href="/contact">
                <a className="navbar-link7 button">
                  <span>Contact Us</span>
                </a>
              </Link>
            </nav>
            <div className="navbar-social-bar">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navbar-icon06"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-icon08"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navbar-icon10"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navbar-icon12"
              >
                <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="navbar-icon14">
                <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            position: relative;
            align-items: center;
            background: #ebcf02;
            margin-bottom: 6rem;
            flex-direction: column;
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1324px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-image {
            width: var(--dl-size-size-large);
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-icon {
            width: 7px;
            height: 7px;
          }
          .navbar-desktop-menu {
            display: flex;
          }
          .navbar-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-button {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .navbar-link1 {
            text-decoration: none;
          }
          .navbar-button1 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .navbar-link2 {
            text-decoration: none;
          }
          .navbar-button2 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .navbar-link3 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: transparent;
          }
          .navbar-button4 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .navbar-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-hamburger {
            width: 100px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 100;
            position: fixed;
            background: #ebcf02;
            transform: translateX(100%);
            transition: 0.5s;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-branding1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link4 {
            color: rgba(18, 40, 33, 1);
            font-size: 24px;
            line-height: 36px;
            text-decoration: none;
          }
          .navbar-icon02 {
            width: 7px;
            height: 7px;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon04 {
            width: 34px;
            height: 34px;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link5 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .navbar-link6 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .navbar-link7 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .navbar-button5 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .navbar-link8 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            text-decoration: none;
            background-color: rgb(18, 40, 33);
          }
          .navbar-button6 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            border-radius: 28px;
            background-color: rgb(18, 40, 33);
          }
          .navbar-social-bar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: auto;
            justify-content: flex-start;
          }
          .navbar-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 991px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-icon {
              display: none;
            }
            .navbar-icon02 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              width: 40px;
              height: 40px;
              display: flex;
              aspect-ratio: 1;
              border-radius: var(--dl-radius-radius-round);
              justify-content: center;
              background-color: #e6f9e0;
            }
            .navbar-hamburger {
              width: 16px;
              height: 8px;
            }
            .navbar-link5 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .navbar-link6 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .navbar-link7 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .navbar-button5 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .navbar-link8 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .navbar-button6 {
              color: rgb(18, 40, 33);
              padding-left: 0px;
              background-color: transparent;
            }
            .navbar-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .navbar-social-bar {
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

Navbar.defaultProps = {
  text8: "News",
  text811: "Digital Archive",
  image_src1: "/playground_assets/logo.png",
  text1: "Events\n",
  text4: "Digital Archive\n",
  text82: "Events",
  text7: "Home",
  text2: "Youtube",
  Hamburger_src: "/playground_assets/group%202084%5B1%5D.svg",
  Hamburger_alt: "image",
  image_alt1: "image",
  text5: "Caribbean Research Center",
  text3: "Gallery",
  text: "News",
  text81: "YouTube Channel",
  text812: "Gallery",
  rootClassName: "",
};

Navbar.propTypes = {
  text8: PropTypes.string,
  text811: PropTypes.string,
  image_src1: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text82: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  Hamburger_src: PropTypes.string,
  Hamburger_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text81: PropTypes.string,
  text812: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Navbar;
