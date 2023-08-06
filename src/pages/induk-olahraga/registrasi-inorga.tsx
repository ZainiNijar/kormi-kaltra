import React from "react";
import Head from "next/head";
import { RegistrasiInorga } from "../../../components";
import { isMobileDevice } from "@/utils/is-mobile";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

const RegistrasiInorgaPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { isMobile } = props;

  return (
    <>
      <Head>
        <title>Registrasi Inorga | KORMI KALTRA</title>
      </Head>
      <RegistrasiInorga isMobile={isMobile} />
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

export default RegistrasiInorgaPage;
