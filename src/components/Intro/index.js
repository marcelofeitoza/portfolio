import React from "react";

import instaIcon from "../../assets/images/insta.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import githubIcon from "../../assets/images/github.png";
import marceloPic from "../../assets/images/marcelo.png";

import resumeEn from "../../resume-en.pdf";
import resumePt from "../../resume-pt.pdf";

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
            width="200"
            height="350"
          />

          <div className="col-xs-100 col-lg-50">
            <h1 className="text-left h2">Marcelo G Feitoza</h1>
            <h2 className="text-secondary h4 mb-3">
              Mobile/Full Stack Developer
            </h2>

            <p className="h5">
              I am a brazilian aspiring mobile and full-stack developer building
              up my skills and learning all the time.
            </p>
            <p className="h5">
              Currently I use React for the front-end, Flask (or Django) for the
              back-end, and am learning and building somethings with React
              Native for mobile.
            </p>
            <p className="h5">
              I look forward to get experience with the technologies I am
              learning and get started working!
            </p>

            <div id="sideicons" className="d-flex mt-5 justify-content-center">
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
            <div
              id="sideicons"
              className="d-flex mt-5 justify-content-center"
            >
            <div className="d-flex flex-column justify-content-center mx-2 mw-25">
              <a
                href={resumePt}
                download
              >
                <p className="h5">My Curriculum (PT-BR)</p>
              </a>
            </div>
            <div className="d-flex flex-column justify-content-center mx-2">
              <a
                href={resumeEn}
                download
              >
                <p className="h5">My Curriculum (EN)</p>
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
