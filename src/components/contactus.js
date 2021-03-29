import {
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./contactus.css";
import MyButton from "./mybutton";
import SectionHeading from "./sectionHeading";

const carTypes = [
  {
    value: "car1",
    label: "Car Hire",
  },
  {
    value: "car2",
    label: "Car Hide For all India",
  },
  {
    value: "car3",
    label: "Car Hire for Delhi",
  },
  {
    value: "car4",
    label: "CAr hire for Jaipur tour",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function ContactUs() {
  const classes = useStyles();
  const [carType, setCarType] = React.useState("car1");

  const handleChange = (event) => {
    setCarType(event.target.value);
  };

  return (
    <div className="contactUs">
      <section id="sectionContactUs" className="sectionBar"> </section>
      <SectionHeading
        heading1="ContactUs"
        heading2="You may reach to us at below address"
      />

      <div className="contactusSection">
        <div
          className="contactImg"
          style={{ backgroundImage: `url(/img/contactus.jpg)` }}
        >
          <div className="contactImgDetail">
            <h2>
              19, Swaroop Vihar Extention, Near International Airport, Jagat
              Pura, Jaipur, Rajasthan 302017
            </h2>
            <h2>Email:</h2>maatours19@gmail.com
            <h2>Phone:</h2>(+91) 774-246-1348
            <div>
              Having trouble? Find the answer to your query here. Don’t hasitate
              to contact us!
            </div>
            <MyButton name="Get Direction" icon="send" />
          </div>
        </div>
        <div className="contactDetailSection">
          <h1>Looking for a Cab?</h1>
          <h4>Fill the details below and we will get back to you soon.</h4>
          <div className="contactForm">
            <form noValidate autoComplete="off">
              <TextField id="standard-basic" label="Name" />
              <TextField id="standard-basic" label="Email" />
              <TextField id="standard-basic" label="Phone No." />

              <TextField
                id="standard-select-currency-native"
                select
                label="Select Taxi Type"
                value={carType}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                
              >
                {carTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="datetime-local"
                label="Date/Time of booking"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <MyButton name="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
