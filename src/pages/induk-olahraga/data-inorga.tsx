import React from "react";
import Head from "next/head";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import { DataInorga } from "../../../components";

const DataInorgaPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { isMobile } = props;

  return (
    <>
      <Head>
        <title>Data Inorga | KORMI KALTRA</title>
      </Head>
      <DataInorga isMobile={isMobile} />
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

export default DataInorgaPage;
