import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Newsletter = () => {
    return (
        <>
            <Navbar rootClassName="navbar-root-class-name"></Navbar>
            <div className="wrapper newsletter-wrapper">
                <h1 className="newsletter-heading">Coming soon<span className="dot">.</span></h1>
                <p className="newsletter-text">Our Newsletter will launch soon.</p>
            </div>
            <Footer rootClassName="footer-root-class-name"></Footer>
        </>

    );
};

export default Newsletter;
