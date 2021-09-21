import React from "react";

function Projects() {
  return (
    <>
      <div id="projects" className="title mt-5">
        <h1 className="text-center text-white">Projects</h1>
      </div>
      <div
        className="d-flex justify-content-center text-white bg-dark
        mt-5 mb-5 w-100"
      >
        <div className="text-decoration-none ">
          <div className="col-sm">
            <a
              href="https://github.com/marcelofeitoza/react-native-todo-list"
              target="_blank"
            >
              <h3 className="h5">React Native - Todo List</h3>
              <p className="text-secondary">
                Todo list using React Native and AsyncStorage
              </p>
            </a>
          </div>
          <div className="col-sm">
            <a
              href="https://github.com/marcelofeitoza/github-user-fetch-app"
              target="_blank"
            >
              <h3 className="h5">React Native - Github User Fetch</h3>
              <p className="text-secondary">
                Fetching Github users using React Native
              </p>
            </a>
          </div>
          <div className="col-sm">
            <a
              href="https://github.com/marcelofeitoza/flask-react-todo-list"
              target="_blank"
            >
              <h3 className="h5">Flask + React + MongoDB - Todo List</h3>
              <p className="text-secondary">
                Full stack todo list using Flask, React and MongoDB
              </p>
            </a>
          </div>
          <div className="col-sm ">
            <a
              href="https://github.com/marcelofeitoza/facebook-clone-react-native"
              target="_blank"
            >
              <h3 className="h5">React Native - Facebook Clone (ongoing)</h3>
              <p className="text-secondary">
                Clone of Facebook UI using React Native
              </p>
            </a>
          </div>
          <div className="col-sm">
            <a
              href="https://github.com/marcelofeitoza/react-native-crypto-price-tracker-app"
              target="_blank"
            >
              <h3 className="h5">React Native - Crypto Price Tracker</h3>
              <p className="text-secondary h6">
                Crypto price tracking using React Native and CoinGecko's API
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
