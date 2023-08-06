import React from "react";
import FormPegiatDesktop from "./form-pegiat-desktop";
import FormPegiatMobile from "./form-pegiat-mobile";

type FormPegiatProps = {
  isMobile: boolean;
};

const FormPegiat = (props: FormPegiatProps) => {
  const { isMobile } = props;
  return isMobile ? <FormPegiatMobile /> : <FormPegiatDesktop />;
};

export default FormPegiat;
