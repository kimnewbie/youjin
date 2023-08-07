import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <box-icon name="award" className="about__icon"></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>
      <div className="about__box">
        <box-icon name="support" className="about__icon"></box-icon>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
