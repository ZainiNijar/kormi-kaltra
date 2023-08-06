import React from "react";
import Beranda from "../../../components/pages/beranda";
import Head from "next/head";

type BerandaProps = {
  isMobile: boolean;
};

const BerandaPage = (props: BerandaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Beranda | KORMI KALTRA</title>
      </Head>
      <Beranda isMobile={isMobile} />
    </>
  );
};

export default BerandaPage;
