import React from "react";
import FotoCardDesktop from "./foto-card-desktop";

type Props = {
  isMobile: boolean;
};

const FotoCard = (props: Props) => {
  const { isMobile } = props;
  return isMobile ? <div>FotoCard</div> : <FotoCardDesktop />;
};

export default FotoCard;
