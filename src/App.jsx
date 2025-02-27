/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Security from "./components/Security";
import IntergrateChains from "./components/IntergrateChains";
import SigningModes from "./components/SigningMode";

function App() {
  const handleClickDownload = () => {
    window.$.scrollTo(0, {
      duration: 800,
    });
  };

  return (
    <>
      <div className="main">
        <Header />
        <Intro />
      </div>
      <Security />
      <div className="intro no-padding">
        <div className="download">
          <img
            src="/assets/images/download-bg-2.png"
            className="download-bg"
            alt="download bg"
          />
          <img
            src="/assets/images/download-bg-mobile-2.png"
            className="download-mobile-bg"
            alt="download bg"
          />
          <h3 className="white">Get Rabby and start your Web3 journey</h3>
          <p className="white">
            Add your address to contacts and experience all features without
            importing a private key.
          </p>
          <a
            href="javascript:;"
            className="round-button orange"
            onClick={handleClickDownload}
          >
            Download
          </a>
        </div>
      </div>
      <div className="main">
        <IntergrateChains />
        <SigningModes />
      </div>
      <Footer />
    </>
  );
}

export default App;
