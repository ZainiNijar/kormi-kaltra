import React from "react";
import StrukturOrganisasiMobile from "./struktur-organisasi-mobile";
import StrukturOrganisasiDesktop from "./struktur-organisasi-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type StrukturOrganisasiProps = {
  isMobile: boolean;
};

const StrukturOrganisasi = (props: StrukturOrganisasiProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <StrukturOrganisasiMobile /> : <StrukturOrganisasiDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default StrukturOrganisasi;
