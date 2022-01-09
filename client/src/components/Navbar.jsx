import React from "react";
import "./Navbar.css";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const currentPath = useLocation().pathname;
  const handleOpenSidebar = () => {
    document.querySelector(".sidebar").style.left = 0;
  };
  const handleCloseSidebar = () => {
    document.querySelector(".sidebar").style.left = "100%";
  };
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 140) {
      document.querySelector(".navbar-fixed").style.top = 0;
    } else {
      document.querySelector(".navbar-fixed").style.top = "-100%";
    }
  });

  return (
    <>
      <div className="sidebar">
        <a
          href="/portfolio"
          className={`${currentPath == "/portfolio" ? "active-link" : <></>}`}
        >
          WORK
        </a>
        <a
          href="/about"
          className={`${currentPath == "/about" ? "active-link" : <></>}`}
        >
          ABOUT
        </a>
        <a
          href="/contact"
          className={`${currentPath == "/contact" ? "active-link" : <></>}`}
        >
          CONTACT
        </a>
        <i
          className="fas fa-arrow-left sidebar-back"
          onClick={handleCloseSidebar}
        >
          <FaTimes />
        </i>
        <span className="social-links-sidebar">
          <a
            href="https://www.linkedin.com/in/fatihcnn/"
            target="_blank"
            className="fab fa-linkedin link link-sidebar"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/fatihcnn"
            target="_blank"
            className="fab fa-github link link-sidebar"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://twitter.com/faticnn"
            target="_blank"
            className="fab fa-twitter link link-sidebar"
          >
            <AiOutlineTwitter />
          </a>
        </span>
      </div>
      <div className="navbar">
        <a
          href="/portfolio"
          className={`${
            currentPath == "/portfolio" ? "active-route-link" : <></>
          } route-link`}
        >
          WORK
        </a>
        <a
          href="/about"
          className={`${
            currentPath == "/about" ? "active-route-link" : <></>
          } route-link`}
        >
          ABOUT
        </a>
        <a
          href="/contact"
          className={`${
            currentPath == "/contact" ? "active-route-link" : <></>
          } route-link`}
        >
          CONTACT
        </a>
        <span className="social-links">
          <a
            href="https://www.linkedin.com/in/fatihcnn/"
            target="_blank"
            className="fab fa-linkedin link"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/fatihcnn"
            target="_blank"
            className="fab fa-github link"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://twitter.com/faticnn"
            target="_blank"
            className="fab fa-twitter link"
          >
            <AiOutlineTwitter />
          </a>
        </span>
        <a href="/portfolio" className="text-logo route-link">
          fatihdev.
        </a>
      </div>
      <div className="mn-placeholder"></div>
      <div className="mobile-navbar">
        <a href="/portfolio" className="text-logo">
          fatihcan.
        </a>
        <i className="fas fa-bars" onClick={handleOpenSidebar}>
          <HiOutlineMenuAlt3 />
        </i>
      </div>
      <div className="navbar-fixed">
        <a
          href="/portfolio"
          className={`${currentPath == "/portfolio" ? "active-link" : <></>} `}
        >
          WORK
        </a>
        <a
          href="/about"
          className={`${currentPath == "/about" ? "active-link" : <></>} `}
        >
          ABOUT
        </a>
        <a
          href="/contact"
          className={`${currentPath == "/contact" ? "active-link" : <></>} `}
        >
          CONTACT
        </a>
      </div>
    </>
  );
}
