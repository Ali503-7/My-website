import React, { useEffect, useRef, useContext, useState } from "react";
import { PageSwiper, pages } from "../../../App.jsx";
import "./nav.scss";

function Nav({ showManu, Toggle }) {
  const delayData = useRef(null);
  const { whereAMi } = useContext(PageSwiper);
  const [zindax, setZindax] = useState({ zIndex: -1 });

  useEffect(() => {
    const listOfDivs = delayData.current.children;
    for (let i = 0; i < 10; i++) {
      const delay = listOfDivs[i].dataset.delay;
      document.documentElement.style.setProperty(`--delay-${i}`, delay);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!showManu) {
        setZindax({ zIndex: -1 });
      }
    }, 1000);
    if (showManu) {
      setZindax({ zIndex: 1000 });
    }
  }, [showManu]);

  return (
    <div
      className={showManu ? "nav show" : "nav"}
      ref={delayData}
      style={zindax}
    >
      <div className="bar" data-delay=".4s"></div>
      <div className="bar" data-delay=".5s"></div>

      <div className="bar" data-delay=".6s"></div>
      <div className="bar" data-delay=".7s">
        <a
          href="#ABOUT"
          onClick={() => {
            whereAMi(pages.HOME_PAGE.NAME, pages.HOME_PAGE.NUM);
            Toggle();
          }}
        >
          ABOUT
        </a>
      </div>
      <div className="bar" data-delay=".8s">
        <a
          href="#SKILLS"
          onClick={() => {
            whereAMi(pages.SKILLS_PAGE.NAME, pages.SKILLS_PAGE.NUM);
            Toggle();
          }}
        >
          SKILLS
        </a>
      </div>
      <div className="bar" data-delay=".9s">
        <a
          href="#EXPERIENCE"
          onClick={() => {
            whereAMi(pages.EXPERIENCE_PAGE.NAME, pages.EXPERIENCE_PAGE.NUM);
            Toggle();
          }}
        >
          EXPERIENCE
        </a>
      </div>
      <div className="bar" data-delay="1.1s">
        <a
          href="#CONTACT"
          onClick={() => {
            whereAMi(pages.CONTACT_PAGE.NAME, pages.CONTACT_PAGE.NUM);
            Toggle();
          }}
        >
          CONTACT
        </a>
      </div>
      <div className="bar" data-delay="1.2s"></div>
      <div className="bar" data-delay="1.3s"></div>
      <div className="bar" data-delay="1.5s"></div>
    </div>
  );
}

export default Nav;
