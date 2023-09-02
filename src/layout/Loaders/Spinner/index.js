import React from "react";
import Loader from "../../../assets/images/Loader.avif"

export const ApplicationLoader = () => {
  return (
    <div className="loader_overlay">
      <div className="overlay__inner">
        <div className="overlay__content">
          <img src={Loader} alt="" />
        </div>
      </div>
    </div>
  );
}