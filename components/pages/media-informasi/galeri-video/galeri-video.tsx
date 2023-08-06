import React from "react";
import GaleriVideoMobile from "./galeri-video-mobile";
import GaleriVideoDesktop from "./galeri-video-dekstop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type GaleriVideoProps = {
  isMobile: boolean;
};

const GaleriVideo = (props: GaleriVideoProps) => {
  const { isMobile } = props;
  return isMobile ? (
    <>
      <Navbar isMobile={isMobile} />
      <GaleriVideoMobile />
      <Footer isMobile={isMobile} />
    </>
  ) : (
    <>
      <Navbar isMobile={isMobile} />
      <GaleriVideoDesktop />
      <Footer isMobile={isMobile} />
    </>
  );
};

export default GaleriVideo;
