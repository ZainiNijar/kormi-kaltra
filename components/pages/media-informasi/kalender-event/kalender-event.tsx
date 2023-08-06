import React from "react";
import KalenderEventMobile from "./kalender-event-mobile";
import KalenderEventDesktop from "./kalender-event-desktop";
import Navbar from "../../../general/navbar/navbar";
import Footer from "../../../general/footer/footer";

type KalenderEventProps = {
  isMobile: boolean;
};

const KalenderEvent = (props: KalenderEventProps) => {
  const { isMobile } = props;
  return (
    <>
      <Navbar isMobile={isMobile} />
      {isMobile ? <KalenderEventMobile /> : <KalenderEventDesktop />}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default KalenderEvent;
