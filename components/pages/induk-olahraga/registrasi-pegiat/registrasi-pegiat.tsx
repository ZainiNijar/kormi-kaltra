import React from "react";
import RegistrasiPegiatMobile from "./registrasi-pegiat-mobile";
import RegistrasiPegiatDesktop from "./registrasi-pegiat-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type RegistrasiPegiatProps = {
  isMobile: boolean;
};

const RegistrasiPegiat = (props: RegistrasiPegiatProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <RegistrasiPegiatMobile /> : <RegistrasiPegiatDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default RegistrasiPegiat;
