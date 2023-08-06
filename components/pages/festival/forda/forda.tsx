import React from "react";
import FordaMobile from "./forda-mobile";
import FordaDesktop from "./forda-desktop";
import { Footer, Navbar } from "../../../general";

type FordaProps = {
  isMobile: boolean;
};

const Forda = (props: FordaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <FordaMobile /> : <FordaDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Forda;
