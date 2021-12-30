import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

export default function Content({ content, ad }) {
  return (
    <div className="content" style={{ animationDelay: ad }}>
      <a href={`/portfolio/${content.id}`}>
        <img src={content.images[0]} alt="" />
        <div className="title">{content.title}</div>
        <div className="tags">
          {content.tags.slice(0, 3).map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
      </a>
    </div>
  );
}
