import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Contact = (props) => {
  return (
    <>
      <div className="event-details-container">
        <Head>
          <title>Contact Us - Caribbean Research Institute</title>
          <meta
            property="og:title"
            content="EventDetails - Caribbean Research Institute"
          />
        </Head>
        <Navbar rootClassName="navbar-root-class-name6"></Navbar>
        <section>
          <div className="listing-hero">
            <div className="hero-heading">
              <div className="hero-large">Contact Us.</div>
              <div className="hero-text">
                {" "}
                <i>Got any Questions? Feel free to ask</i>{" "}
              </div>
            </div>
          </div>
          <div className="container-contact">
            <div className="wrap-contact">
              <form
                name="contact"
                className="contact-form validate-form"
                method="post"
                action="contact-form-handler.php"
              >
                <div
                  className="wrap-input validate-input"
                  data-validate="Please enter your name"
                >
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div
                  className="wrap-input validate-input"
                  data-validate="Please enter your email"
                >
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                  />
                </div>
                <div
                  className="wrap-input validate-input"
                  data-validate="Please enter your message"
                >
                  <textarea
                    className="input"
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="container-contact-form-btn">
                  <button type="submit" className="contact-form-btn">
                    <span>Send</span>
                  </button>
                </div>
                <div className="grid-container">
                  <div className="item1 left-align">
                    <i className="fa fa-lg fa-map-marker-alt" /> 1150 Carroll
                    Street, Rms C313-C315, Brooklyn NY 11225
                  </div>
                  <div className="item4 right-align">
                    <i className="fa fa-lg fa-phone" /> 7182706218
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div style={{ display: "flex", justifyContent: "center",margin:"10px" }}>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.322968242375!2d-73.95420038484836!3d40.66685227933681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b76b5d851d9%3A0x759c72b9098a5ad5!2s1150%20Carroll%20St%2C%20Brooklyn%2C%20NY%2011225%2C%20USA!5e0!3m2!1sen!2s!4v1679182098800!5m2!1sen!2s"
            style={{ border: 0, width: "95%", height: "500px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </>
  );
};

export default Contact;
