import React from "react";
import FornasMobile from "./fornas-mobile";
import FornasDesktop from "./fornas-desktop";
import { Footer, Navbar } from "../../../general";

type FornasProps = {
  isMobile: boolean;
};

const Fornas = (props: FornasProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <FornasMobile /> : <FornasDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Fornas;
