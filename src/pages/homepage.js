import React from "react";

import "./homepage.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import OpenWithRoundedIcon from "@material-ui/icons/OpenWithRounded";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SectionHeading from "../components/sectionHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
      
    <div id="homepage" className="homepage">
    
      <div className="frontImgDiv">
        <div
          className="firstView"
          style={{ backgroundImage: `url(/img/frontimg4.jpg)` }}
        ></div>
        <div className="homepageBookDiv">
          <div className="bookDiv">
            <h2> Book your destination now </h2>
            <div className="bookForm">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="From" />
                <TextField id="standard-basic" label="To" />
                <TextField id="standard-basic" label="Date" />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section id="sectionServiceOffered">
        <SectionHeading
          heading1="Service Offered"
          heading2="Wide range of services offered"
        />
      </section>

      <div className="secondView">
        <div className="frontPageBlocks">
          <AcUnitIcon style={{ fontSize: 70 }} />
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <LocalTaxiIcon style={{ fontSize: 70 }} />
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <OpenWithRoundedIcon style={{ fontSize: 70 }} />
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
        <div className="frontPageBlocks">
          <h2>Ac Taxi Services</h2>
          We provide affordable AC taxi services for your full comfort and
          convenience to reach to your destination.
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
