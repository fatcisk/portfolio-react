import React from "react";
import Content from "../components/Content";
import "../pages/Portfolio.css";
import data from "../data/db.json";

export default function Portfolio() {
  return (
    <div className="portfolio">
      {/* <div className="mobile-blank-area"></div> */}
      {data.contents.map((content) => (
        <Content key={content.id} content={content} ad={content.ad} />
      ))}
    </div>
  );
}
