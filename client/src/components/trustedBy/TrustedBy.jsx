import React from "react";
import javascript from "../../img/javascript.png";
import mongoDB from "../../img/mongodb.png";
import react from "../../img/react.png";
import sanity from "../../img/Sanity.png";
import "./TrustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Technologies:</span>
        <img src="../" alt="" />
        <img src={react} alt="" />
        <img src={javascript} alt="" />
        <img src={mongoDB} alt="" />
        <img src={sanity} alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
