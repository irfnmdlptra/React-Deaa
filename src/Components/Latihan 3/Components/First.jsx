import React from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import './Styles/Reload.css';
const First = () => {
  const navigate = useNavigate();
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-6">
          <div
            className="card m-5"
            style={{
              background: "url(https://source.unsplash.com/random/544x214) center center no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="card-body">
              <h5 className="card-title text-white">Card Home</h5>
              <p className="card-text text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
                <a href="#" className="btn btn-primary mx-3" onClick={() => navigate("/about")}>
                  Tentang Kami
                </a>
            </div>
          </div>
        </div>
      </div>
      <div class="background-button">
        <button class="button" onClick={() => navigate("*")}>Don't Click!</button>
      </div>
    </div>
  );
};

export default First;
