import React from "react";

function Skills() {
  return (
    <div id="skills" className="bg-dark text-white w-75 my-5">
      <h1 className="text-center">Skills</h1>

      <div className="container w-70 container w-70 align-items-center">
        <div className="row">
          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="JavaScript"
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                width={46}
                height={46}
              />
              <h4 className="ml-2">JavaScript</h4>
            </div>
            <p className="h6">Advanced</p>
          </div>

          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="TypeScript"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                width={40}
                height={40}
              />
              <h4 className="ml-2">TypeScript</h4>
            </div>
            <p className="h6">Basic</p>
          </div>

          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="React Native"
                src="https://img.icons8.com/color/48/000000/react-native.png"
                width={48}
                height={48}
              />
              <h4 className="ml-2">React Native</h4>
            </div>
            <p className="h6">Intermediate</p>
          </div>

          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="Git"
                src="https://img.icons8.com/color/50/000000/git.png"
                width={48}
                height={48}
              />
              <h4 className="ml-2">Git</h4>
            </div>
            <p className="h6">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
