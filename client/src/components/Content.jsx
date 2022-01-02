import React from "react";
import "./Content.css";

export default function Content({ content, ad }) {
  return (
    <div className="content" style={{ animationDelay: ad }}>
      <a href={`/portfolio/${content.id}`}>
        <img src={content.images[0]} alt="project" />
        <div className="title">{content.title}</div>
        <div className="tags">
          {content.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </a>
    </div>
  );
}
