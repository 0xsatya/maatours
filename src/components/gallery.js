import React from "react";

import './gallery.css';
import SectionHeading from "./sectionHeading";

function Gallery() {
  return (
    <div className="gallery">
    <section id="sectionGallery" className="sectionBar"> </section>
        <SectionHeading heading1="Gallery" heading2="Our Photo Gallery"/>

      <div className="imageGallery">
      <img src="/img/galimg (1).jpg" alt="" />
      <img src="/img/galimg (2).jpg" alt="" />
      <img src="/img/galimg (3).jpg" alt="" />
      <img src="/img/galimg (4).jpg" alt="" />
      <img src="/img/galimg (5).jpg" alt="" />
      <img src="/img/galimg (6).jpg" alt="" />
      <img src="/img/galimg (7).jpg" alt="" />
      <img src="/img/galimg (8).jpg" alt="" />
      <img src="/img/galimg (9).jpg" alt="" />

      </div>
    </div>
  );
}

export default Gallery;
