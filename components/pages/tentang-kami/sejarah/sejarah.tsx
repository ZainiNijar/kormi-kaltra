import React from "react";
import SejarahMobile from "./sejarah-mobile";
import SejarahDesktop from "./sejarah-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type SejarahProps = {
  isMobile: boolean;
};

const Sejarah = (props: SejarahProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <SejarahMobile /> : <SejarahDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Sejarah;
