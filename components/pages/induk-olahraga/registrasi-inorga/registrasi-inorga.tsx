import React from "react";
import RegistrasiInorgaMobile from "./registrasi-inorga-mobile";
import RegistrasiInorgaDesktop from "./registrasi-inorga-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type RegistrasiInorgaProps = {
  isMobile: boolean;
};

const RegistrasiInorga = (props: RegistrasiInorgaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <RegistrasiInorgaMobile /> : <RegistrasiInorgaDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default RegistrasiInorga;
