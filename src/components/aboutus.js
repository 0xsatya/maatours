import React from "react";
import "./aboutus.css";
import SectionHeading from "./sectionHeading";

function AboutUs() {
  return (
    <div className="aboutUs">
    <section id="sectionAboutUs" className="sectionBar"> </section>
        <SectionHeading heading1="About Us" heading2="Our Clients"/>

      <div className="aboutusContent">
        <img src="/img/IMG-20191103-WA0013.jpg" alt="" />
        <div className="aboutusContentData">
          <h2>Clients choose us for :- </h2>
          <h3> - Airport Pickup & Drop</h3>
          <h3> - Corporate</h3>
          <h3> - Daily office commuting</h3>
          <h3> - Ac Taxi Services</h3>
          <h3> - Outstation Tour & Travel</h3>
          <span>
            We, Maa Tours, situated at Jagat Pura, Jaipur, Rajasthan, have a
            profound understanding of our consumers travel needs and
            preferences. We aim to offer individuals as well as corporate a wide
            range of cars on hire. We have well maintained & luxurious cars
            which help to make your travel comfortable and pleasing. We are
            passionate & professional at the same time which help us deliver
            outstanding services to our clients. Get in touch with us to get the
            best travel solution.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
