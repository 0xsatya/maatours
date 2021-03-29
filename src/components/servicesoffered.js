import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import OpenWithRoundedIcon from "@material-ui/icons/OpenWithRounded";
import SectionHeading from "../components/sectionHeading";
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import LocalTaxiRoundedIcon from '@material-ui/icons/LocalTaxiRounded';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import RepeatIcon from '@material-ui/icons/Repeat';
import WcIcon from '@material-ui/icons/Wc';

import './servicesoffered.css';

function ServicesOffered() {
  return (
    <div className="servicesoffered">
      <section
        id="sectionServiceOffered"
        className="sectionBarHomepage"
      ></section>

      <SectionHeading
        heading1="Service Offered"
        heading2="Wide range of services offered"
      />

      <div className="secondView">
        <div className="frontPageBlocks">
          <AcUnitIcon style={{ fontSize: 70 }} />
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <LocalTaxiOutlinedIcon style={{ fontSize: 70 }} />
          <h2>Car Hire</h2>
          We provide cars on hire at extremely affordable rates and can be used to travel to various locations.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <OpenWithRoundedIcon style={{ fontSize: 70 }} />
          <h2>Car Hire For All India </h2>
          We aim to provide reliable, affordable and safe car hire services for all India to our valuable customers.
          <p></p>
        </div>
        <div className="frontPageBlocks">
        <LocalTaxiIcon style={{ fontSize: 70 }} />
          <h2>Car Hire For Delhi  </h2>
          Car on rent service for country capital, all types of cars available. No hidden or extra charges. Call now. 
          <p></p>
        </div>
        <div className="frontPageBlocks">
        <LocalTaxiRoundedIcon style={{ fontSize: 70 }} />
          <h2> Taxi Outstation </h2>
          We ensure you safe and comfortable trip to outstation at the best price, to make it your memorable trip.
          <p></p>
        </div>
        <div className="frontPageBlocks">
        <SyncAltIcon style={{ fontSize: 70 }} />
          <h2> Outstation </h2>
          Large fleet of cars to give on hire for outstation purpose which are luxurious as well as economical for our clients.  
          <p></p>
        </div>
        <div className="frontPageBlocks">
        <BusinessCenterIcon style={{ fontSize: 70 }} />
          <h2> Corporate  </h2>
          Car rental for corporate is the easiest thing to book and you could be rest assured of getting the best of service.   
          <p></p>
        </div>
        <div className="frontPageBlocks">
        <RepeatIcon style={{ fontSize: 70 }} />
          <h2> Periodic Basis     </h2>
          Planning to rent a car on periodic basis? Just contact us &amp; try our reliable car rental service to travel in style &amp; luxury. 
          <p></p>
        </div>
        <div className="frontPageBlocks">
        <WcIcon style={{ fontSize: 70 }} />
          <h2> Wedding  </h2>
          We are engaged in providing our clients with luxurious as well as maintained cars on hire for wedding. 
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
