import React from "react";
import GaleriFotoMobile from "./galeri-foto-mobile";
import GaleriFotoDesktop from "./galeri-foto-dekstop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type GaleriFotoProps = {
  isMobile: boolean;
};

const GaleriFoto = (props: GaleriFotoProps) => {
  const { isMobile } = props;
  return isMobile ? (
    <>
      <Navbar isMobile={isMobile} />
      <GaleriFotoMobile />
      <Footer isMobile={isMobile} />
    </>
  ) : (
    <>
      <Navbar isMobile={isMobile} />
      <GaleriFotoDesktop />
      <Footer isMobile={isMobile} />
    </>
  );
};

export default GaleriFoto;
