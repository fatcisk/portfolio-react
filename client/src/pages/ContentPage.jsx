import React from "react";
import "./ContentPage.css";
import { useParams } from "react-router-dom";
import data from "../data/db.json";
import { BsCircleFill, BsGithub } from "react-icons/bs";

export default function ContentPage() {
  const { id } = useParams();
  const contentData = data.contents[id];
  return (
    <div className="portfolio-item">
      <h1 className="item-header">{contentData.title}</h1>
      <p className="item-description">{contentData.description}</p>
      {contentData.github !== "" ? (
        <div className="project-rew">
          <h4>Check this project on:</h4>
          <a href={contentData.github} target="_blank">
            <span>
              <BsGithub />
            </span>
            Github
          </a>
        </div>
      ) : (
        <></>
      )}
      {contentData.live !== "" ? (
        <div className="project-rew">
          <h4>Check out this project live:</h4>
          <a href={contentData.live} target="_blank">
            <span>
              <BsCircleFill color="red" />
            </span>
            {contentData.live}
          </a>
        </div>
      ) : (
        <></>
      )}
      <div className="item-images">
        {data.contents[id].images.map((image) => (
          <img src={image} alt="" loading="lazy" />
        ))}
      </div>
      <h1>Technologies used</h1>
      <div className="technologies-used">
        {data.contents[id].tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
}
