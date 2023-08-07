import React from "react";
import Head from "next/head";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import { Forda } from "../../../../components";

const FordaPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
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

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const isMobile = isMobileDevice(req.headers["user-agent"]);

  return {
    props: { isMobile },
  };
};

export default FordaPage;
