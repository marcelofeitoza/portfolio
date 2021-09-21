import React from "react";

import instaIcon from "../../assets/images/insta.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import githubIcon from "../../assets/images/github.png";
import marceloPic from "../../assets/images/marcelo.png";

function Intro() {
  return (
    <div
      id="home"
      className="d-flex justify-content-center text-white bg-dark h-75 w-75 p-3 mt-5 mb-5"
    >
      <div className="d-flex flex-row justify-content-center">
        <div id="sideicons">
          <div className="d-flex flex-row justify-content-center mt-4">
            <a href="https://www.instagram.com/m.feitozaa_/" target="_blank">
              <img src={instaIcon} width="48" height="48" />
            </a>
          </div>
          <div className="d-flex flex-column justify-content-center my-5 w-50">
            <a
              href="https://www.linkedin.com/in/marcelofeitoza7/"
              target="_blank"
            >
              <img src={linkedinIcon} width="48" height="48" />
            </a>
          </div>
          <div className="d-flex flex-column justify-content-center mb-4">
            <a href="https://github.com/marcelofeitoza/" target="_blank">
              <img src={githubIcon} width="48" height="48" />
            </a>
          </div>
        </div>

        <div className="ml-5 justify-content-center w-50">
          <h1 className="text-left h2">Marcelo G Feitoza</h1>
          <h2 className="text-secondary h4 mb-3">Mobile/Full Stack Developer</h2>

          <p className='h5 w-80'>
            I am a brazilian aspiring full-stack and mobile developer building
            up my skills and learning all the time.
          </p>
          <p className='h5 w-80'>
            Currently I use React for the front-end, Flask (or Django) for the
            back-end, and am learning and building somethings with React Native
            for mobile.
          </p>
        </div>
        <div className="ml-2">
          <img
          src={marceloPic}
          alt="marcelo"
          width="200"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
