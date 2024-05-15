import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/animation.js";
import "./preloader.css";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer</span>
        <span>Engineer</span>
        <span>Creator</span>
      </div>
    </div>
  );
};

export default Preloader;
