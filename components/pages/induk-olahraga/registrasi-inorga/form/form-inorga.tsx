import React from "react";
import FormInorgaDesktop from "./form-inorga-desktop";
import FormInorgaMobile from "./form-inorga-mobile";

type FormInorgaProps = {
  isMobile: boolean;
};

const FormInorga = (props: FormInorgaProps) => {
  const { isMobile } = props;
  return isMobile ? <FormInorgaMobile /> : <FormInorgaDesktop />;
};

export default FormInorga;
