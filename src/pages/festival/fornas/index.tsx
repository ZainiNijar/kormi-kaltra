import React from "react";
import Head from "next/head";
import { Fornas } from "../../../../components";

type FornasProps = {
  isMobile: boolean;
};

const FornasPage = (props: FornasProps) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Fornas | KORMI KALTRA</title>
      </Head>
      <Fornas isMobile={isMobile} />
    </>
  );
};

export default FornasPage;
