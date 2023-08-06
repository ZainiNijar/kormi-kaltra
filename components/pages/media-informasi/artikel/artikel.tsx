import React from "react";
import ArtikelMobile from "./artikel-mobile";
import ArtikelDesktop from "./artikel-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type ArtikelProps = {
  isMobile: boolean;
};

const Artikel = (props: ArtikelProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <ArtikelMobile /> : <ArtikelDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Artikel;
