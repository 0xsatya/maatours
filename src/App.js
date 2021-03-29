import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/homepage";

import "./App.css";
import AboutUs from "./components/aboutus";
import Gallery from "./components/gallery";
import ContactUs from "./components/contactus";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function App() {
  return (
    <div className="app">
    <section id="sectionHomePage"> </section>
      <div className="app__body">
        <Header />
        <HomePage />
        <AboutUs />
        <Gallery />
        <ContactUs />
        <Footer />
      </div>
      
      <AnchorLink href="#sectionHomePage" className="scrollTop" >
        <ArrowUpwardIcon />
      </AnchorLink>
    </div>
  );
}

export default App;
