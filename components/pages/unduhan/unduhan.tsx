import React from "react";
import UnduhanMobile from "./unduhan-mobile";
import UnduhanDesktop from "./unduhan-desktop";
import { Footer, Navbar } from "../../general";

type UnduhanProps = {
  isMobile: boolean;
};

const Unduhan = (props: UnduhanProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <UnduhanMobile /> : <UnduhanDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Unduhan;
