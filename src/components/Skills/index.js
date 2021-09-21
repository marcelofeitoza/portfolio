import React from "react";

function Skills() {
  return (
    <div id="skills" className="my-5 bg-dark text-white w-100">
      <h1 className="text-center mb-3">Skills</h1>

      <div className="container mt-5 w-70">
        <div className="row">
          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="Python"
                src="https://img.icons8.com/color/452/python--v1.png"
                width={48}
                height={48}
              />
              <h4 className="ml-2">Python</h4>
            </div>
            <p className="h6">Intermediate ~ Advanced</p>
          </div>

          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="Flask"
                src="https://img.icons8.com/ios/150/000000/flask.png"
                width={52}
                height={52}
              />
              <h4 className="ml-2">Flask</h4>
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
            <p className="h6">Intermediate ~ Advanced</p>
          </div>
        </div>

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
                alt="React"
                src="https://img.icons8.com/color/48/000000/react-native.png"
                width={48}
                height={48}
              />
              <h4 className="ml-2">React</h4>
            </div>
            <p className="h6">Intermediate</p>
          </div>

          <div className="col-sm">
            <div className="row align-items-center ml-1 h-20">
              <img
                alt="React Native"
                src="https://img.icons8.com/nolan/64/react-native.png"
                width={48}
                height={48}
              />
              <h4 className="ml-2">React Native</h4>
            </div>
            <p className="h6">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
