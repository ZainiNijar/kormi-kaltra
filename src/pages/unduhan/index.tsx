import React from "react";
import Head from "next/head";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import { Unduhan } from "../../../components";

const Index = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { isMobile } = props;

  return (
    <>
      <Head>
        <title>Unduhan | KORMI KALTRA</title>
      </Head>
      <Unduhan isMobile={isMobile} />
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

export default Index;
