import React from "react";
import { Footer, Navbar } from "../../../general";
import DataInorgaMobile from "./data-inorga-mobile";
import DataInorgaDesktop from "./data-inorga-desktop";

type DataInorgaProps = {
  isMobile: boolean;
};

const DataInorga = (props: DataInorgaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <DataInorgaMobile /> : <DataInorgaDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default DataInorga;
