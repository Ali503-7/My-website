import React, { useEffect, useRef } from "react";
import Hacker from "../../../assets/JSAnimation/hackingTransition";
import "./Home.scss";

function Home() {
  const MyName = useRef(null);
  const AboutMe = useRef(null);
  const AboutMe2 = useRef(null);
  const AboutMe3 = useRef(null);
  const openTag = useRef(null);
  const closeTag = useRef(null);

  useEffect(() => {
    Hacker(MyName, 4);
    Hacker(AboutMe, 2);
    Hacker(AboutMe2, 2);
    Hacker(AboutMe3, 2);
  }, []);

  return (
    <section className="Home">
      <div className="container">
        <div className="open-tag" ref={openTag} data-value="<Hi, My Name's>">
          {"<"}Hi, My Name's{">"}
        </div>
        <div className="mid">
          <div className="name" ref={MyName} data-value="ALI MOHAMED">
            ALI MOHAMED
          </div>
          <div className="workAs">
            <p ref={AboutMe} data-value="I have experience in building">
              I have experience in building
            </p>
            <p ref={AboutMe2} data-value="responsive and dynamic websites">
              responsive and dynamic websites
            </p>
            <p ref={AboutMe3} data-value="and web applications.">
              and web applications.
            </p>
          </div>
        </div>
        <div className="close-tag" ref={closeTag} data-value="</Hi, My Name's>">
          {"<"}/Hi, My Name's{">"}
        </div>
      </div>
    </section>
  );
}

export default Home;
