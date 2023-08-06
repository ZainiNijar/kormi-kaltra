import React from "react";
import { Footer, Navbar } from "../../../general";
import DataPegiatMobile from "./data-pegiat-mobile";
import DataPegiatDesktop from "./data-pegiat-desktop";

type DataPegiatProps = {
  isMobile: boolean;
};

const DataPegiat = (props: DataPegiatProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <DataPegiatMobile /> : <DataPegiatDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default DataPegiat;
