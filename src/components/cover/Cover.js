import React from "react";
import "./Cover.css";
import IMG1 from "../../images/cover1.jpg";

const Cover = () => {
  return (
    <section className="cover">
      <div className="coverImage">
        <img src={IMG1} className="cover" alt="cover" />
      </div>
    </section>
  );
};

export default Cover;
