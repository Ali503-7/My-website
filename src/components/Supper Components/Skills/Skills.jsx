import React, { useEffect, useRef } from "react";
import Hacker from "../../../assets/JSAnimation/hackingTransition";
import "./Skills.scss";

function Skills() {
  const Skills = useRef();

  useEffect(() => {
    Hacker(Skills, 6);
  }, []);

  return (
    <section className="Skills container">
      <div className="header">
        <h1 ref={Skills} data-value="My Skills">
          My Skills
        </h1>
      </div>
      <div className="open-tag">
        {"<"}My Skills{">"}
      </div>
      <div className="boxes">
        <div className="box">
          <img src="./imgs/Skills_imgs/html-svgrepo-com.svg" alt="html" />
          <span>HTML</span>
        </div>
        <div className="box">
          <img src="./imgs/Skills_imgs/css-svgrepo-com.svg" alt="css" />
          <span>CSS</span>
        </div>
        <div className="box">
          <img src="./imgs/Skills_imgs/js-svgrepo-com.svg" alt="javascript" />
          <span>JAVASCRIPT</span>
        </div>
        <div className="box">
          <img src="./imgs/Skills_imgs/reactjs-svgrepo-com.svg" alt="React" />
          <span>REACT</span>
        </div>
        <div className="box">
          <img src="./imgs/Skills_imgs/sass-svgrepo-com.svg" alt="Scss" />
          <span>SASS & SCSS</span>
        </div>
        <div className="box">
          <img
            src="./imgs/Skills_imgs/tailwindcss-icon-svgrepo-com.svg"
            alt="TAILWIND"
          />
          <span>TAILWIND</span>
        </div>
        <div className="box">
          <img
            src="./imgs/Skills_imgs/github-svgrepo-com.svg"
            alt="github"
          />
          <span>GITHUB</span>
        </div>
        <div className="box">
          <img
            src="./imgs/Skills_imgs/git-svgrepo-com.svg"
            alt="git"
          />
          <span>GIT</span>
        </div>
      </div>
      <div className="close-tag">
        {"<"}/My Skills{">"}
      </div>
    </section>
  );
}

export default Skills;
