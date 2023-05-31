import React, { useState, useEffect } from "react";
import "./Loader.css";
import LoaderLogo from "./logobackremoved.png";

const Loader = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader">
            <div className="LOaderLogo"><img src={LoaderLogo} alt="logo"/></div>
          <div className="loader-line"></div>
          <div className="loader-progress"></div>
        </div>
      )}
      {!showLoader && children}
    </>
  );
};

export default Loader;
