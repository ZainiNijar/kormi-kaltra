import React from "react";
import ProgramKerjaMobile from "./program-kerja-mobile";
import ProgramKerjaDesktop from "./program-kerja-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type ProgramKerjaProps = {
  isMobile: boolean;
};

const ProgramKerja = (props: ProgramKerjaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <ProgramKerjaMobile /> : <ProgramKerjaDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default ProgramKerja;
