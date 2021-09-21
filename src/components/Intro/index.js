import React from "react";

import instaIcon from "../../assets/images/insta.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import githubIcon from "../../assets/images/github.png";
import marceloPic from "../../assets/images/marcelo.png";

function Intro() {
  return (
    <div
      id="home"
      className="d-flex justify-content-center text-white bg-dark
      w-75 my-5 pb-5"
    >
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex flex-row justify-content-center w-60">
          <img
            src={marceloPic}
            alt="marcelo"
            className="d-none d-sm-block mr-3"
            width="175"
          />

          <div className="">
            <h1 className="text-left h2">Marcelo G Feitoza</h1>
            <h2 className="text-secondary h4 mb-3">
              Mobile/Full Stack Developer
            </h2>

            <p className="h5">
              I am a brazilian aspiring full-stack and mobile <br></br>
              developer building up my skills and learning all the time.
            </p>
            <p className="h5">
              Currently I use React for the front-end, Flask (or Django){" "}
              <br></br>
              for the back-end, and am learning and building <br></br>
              somethings with React Native for mobile.
            </p>

            <div id="sideicons" className="d-flex mt-3 justify-content-center">
              <div className="d-flex flex-row justify-content-center mx-2">
                <a
                  href="https://www.instagram.com/m.feitozaa_/"
                  target="_blank"
                >
                  <img src={instaIcon} width="40" height="40" />
                </a>
              </div>
              <div className="d-flex flex-column justify-content-center mx-2">
                <a
                  href="https://www.linkedin.com/in/marcelofeitoza7/"
                  target="_blank"
                >
                  <img src={linkedinIcon} width="40" height="40" />
                </a>
              </div>
              <div className="d-flex flex-column justify-content-center mx-2">
                <a href="https://github.com/marcelofeitoza/" target="_blank">
                  <img src={githubIcon} width="40" height="40" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
