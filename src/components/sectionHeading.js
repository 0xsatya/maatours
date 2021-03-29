import React from "react";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import './sectionHeading.css';

function SectionHeading({heading1, heading2}) {
  return (
    <div>
      <div className="contentHeading">
        <div>{heading1}</div>
        <div className="contentHeadingLarge">{heading2}</div>
        <RemoveRoundedIcon style={{ fontSize: 50 }} />
      </div>
    </div>
  );
}

export default SectionHeading;
