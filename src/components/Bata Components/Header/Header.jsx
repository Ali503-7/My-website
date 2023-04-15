import React, { useRef, useState, useEffect, useContext } from "react";
import Hacker from "../../../assets/JSAnimation/hackingTransition.js";
import Nav from "../NavBar/nav";
import { PageSwiper } from "../../../App.jsx";
import "./Header.scss";

function Header({ currentPage }) {
  const [showManu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { whereAMi } = useContext(PageSwiper);

  const About = useRef(null);
  const Experience = useRef(null);
  const Contact = useRef(null);
  // const resume = useRef(null);

  useEffect(() => {
    Hacker(About, 6);
    Hacker(Experience, 6);
    Hacker(Contact, 6);
    // Hacker(resume, 6);
  }, []);

  function Toggle() {
    setShowMenu((pre) => !pre);
    setClicked(pre => !pre)
  }

  return (
    <>
      <Nav showManu={showManu} Toggle={Toggle} />
      <header className="header">
        <div className="container">
          <div
            className="logo"
            onClick={() =>
              whereAMi(currentPage.HOME_PAGE.NAME, currentPage.HOME_PAGE.NUM)
            }
          >
            <img
              src="./imgs/logs/logo.png"
              alt="#"
            />
          </div>

          <div className="right">
            <div
              className={clicked ? "burger burger-clicked" : "burger"}
              onClick={() => {
                Toggle();
                // setClicked((pre) => !pre);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="links">
              <div className="link">
                <ol>
                  <li>
                    <a
                      href="#About"
                      onClick={() =>
                        whereAMi(
                          currentPage.HOME_PAGE.NAME,
                          currentPage.HOME_PAGE.NUM
                        )
                      }
                    >
                      <span className="navNumber">01.</span>{" "}
                      <span
                        data-value="About"
                        ref={About}
                        className={currentPage.HOME_PAGE.STATE ? "active" : ""}
                      >
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Skills"
                      onClick={() =>
                        whereAMi(
                          currentPage.SKILLS_PAGE.NAME,
                          currentPage.SKILLS_PAGE.NUM
                        )
                      }
                    >
                      <span className="navNumber">02.</span>{" "}
                      <span
                        data-value="Skills"
                        ref={About}
                        className={
                          currentPage.SKILLS_PAGE.STATE ? "active" : ""
                        }
                      >
                        Skills
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Experience"
                      onClick={() =>
                        whereAMi(
                          currentPage.EXPERIENCE_PAGE.NAME,
                          currentPage.EXPERIENCE_PAGE.NUM
                        )
                      }
                    >
                      <span className="navNumber">03. </span>
                      <span
                        data-value="Experience"
                        ref={Experience}
                        className={
                          currentPage.EXPERIENCE_PAGE.STATE ? "active" : ""
                        }
                      >
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      onClick={() =>
                        whereAMi(
                          currentPage.CONTACT_PAGE.NAME,
                          currentPage.CONTACT_PAGE.NUM
                        )
                      }
                    >
                      <span className="navNumber">04.</span>
                      <span
                        data-value="Contact"
                        ref={Contact}
                        className={
                          currentPage.CONTACT_PAGE.STATE ? "active" : ""
                        }
                      >
                        Contact
                      </span>
                    </a>
                  </li>
                </ol>
              </div>
              {/* <div className="button">
                <button ref={resume} data-value="Resume">
                  Resume
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
