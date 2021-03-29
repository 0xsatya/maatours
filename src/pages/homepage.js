import React from "react";

import "./homepage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ServicesOffered from "../components/servicesoffered";


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

    <ServicesOffered />

    </div>
  );
}

export default HomePage;
