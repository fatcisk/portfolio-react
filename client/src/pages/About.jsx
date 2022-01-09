import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="summary">
        <div className="my-image">
          <img src="/images/author.jpg" alt="" />
        </div>
        <div className="details">
          <h2>
            I am a solution-oriented Blockchain Developer, who has a passion for
            solving problems in technical ways.
          </h2>
          <p>
            I love building software, first started when I was 13 years old, I
            have created mobile games with unity also have shared them on my
            youtube channel which has reached to 90K subscribers. My web
            development experience comes from 3 years ago when I decided to make
            a website for my subscribers to let them be able to download my
            games, also other developers' games easily. Now I am into blockchain
            development, I create web 3.0 dApps and solidity smart contracts
            that run on top of ethereum blockchain. I am also really
            interested in DeFi and NFT world.
          </p>
        </div>
      </div>
      <h2 className="skills-header">Skills and Technologies</h2>
      <div className="skills-container">
        <span className="skill" style={{ animationDelay: "0.6s" }}>
          <img src="/images/icons/html.png" alt="" />
          <span>HTML</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.65s" }}>
          <img src="/images/icons/css.png" alt="" />
          <span>CSS</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.7s" }}>
          <img src="/images/icons/js.svg" alt="" />
          <span>Javascript</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.75s" }}>
          <img src="/images/icons/react.png" alt="" />
          <span>React</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.75s" }}>
          <img
            src="/images/icons/react.png"
            alt=""
            style={{ filter: "hue-rotate(70deg)" }}
          />
          <span>React Native</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.8s" }}>
          <img src="/images/icons/nodejs.png" alt="" />
          <span>Node.js</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.9s" }}>
          <img src="/images/icons/ethereum.png" alt="" />
          <span>Ethereum</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.9s" }}>
          <img src="/images/icons/smc.jpg" alt="" />
          <span>Smart Contracts</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.95s" }}>
          <img src="/images/icons/solidity.svg" alt="" />
          <span>Solidity</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.95s" }}>
          <img src="/images/icons/web3js.png" alt="" />
          <span>Web3.js</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.95s" }}>
          <img src="/images/icons/ethersjs.png" alt="" />
          <span>Ethers.js</span>
        </span>
        <span className="skill" style={{ animationDelay: "1.1s" }}>
          <img src="/images/icons/metamask.png" alt="" />
          <span>Metamask</span>
        </span>
        <span className="skill" style={{ animationDelay: "1s" }}>
          <img src="/images/icons/hardhat.png" alt="" />
          <span>Hardhat</span>
        </span>
        <span className="skill" style={{ animationDelay: "1.05s" }}>
          <img src="/images/icons/truffle.png" alt="" />
          <span>Truffle</span>
        </span>
        <span className="skill" style={{ animationDelay: "0.85s" }}>
          <img src="/images/icons/mongo.png" alt="" />
          <span>MongoDB</span>
        </span>
        <span className="skill" style={{ animationDelay: "1.15s" }}>
          <img src="/images/icons/git.png" alt="" />
          <span>Git</span>
        </span>
        <span className="skill" style={{ animationDelay: "1.2s" }}>
          <img src="/images/icons/figma.png" alt="" />
          <span>Figma</span>
        </span>
      </div>
    </div>
  );
}
