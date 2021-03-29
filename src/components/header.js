import React from "react";
import "./header.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
  return (
    <div id="sticky-header" className="sticky-header">
      <div className="logo">
        <img src="/img/maatourslogo.jpg" alt="logo" />
      </div>
      <div className="links">
        <div className="menuLink"> <AnchorLink href="#sectionHomePage">Home</AnchorLink></div>
        <div className="menuLink"> <AnchorLink href='#sectionServiceOffered'>Service Offered</AnchorLink></div>
        <div className="menuLink"><AnchorLink class="mainmenu_link" href="#sectionAboutUs">About Us  </AnchorLink></div>
        <div className="menuLink"><AnchorLink class="mainmenu_link" href="#sectionGallery">Gallery   </AnchorLink></div>
        <div className="menuLink"><AnchorLink class="mainmenu_link" href="#sectionContactUs">Contact Us</AnchorLink></div>
      </div>
      <div className="loginLink">Login</div>
      
    </div>
  );
}

export default Header;
