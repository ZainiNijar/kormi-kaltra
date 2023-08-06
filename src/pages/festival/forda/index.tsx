import React from "react";
import Head from "next/head";
import { Forda } from "../../../../components";

type FordaProps = {
  isMobile: boolean;
};

const FordaPage = (props: FordaProps) => {
  const { isMobile } = props;
  return (
    <>
      <Head>
        <title>Forda | KORMI KALTRA</title>
      </Head>
      <Forda isMobile={isMobile} />
    </>
  );
};

export default FordaPage;
