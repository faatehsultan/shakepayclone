import React from "react";
import Head from "next/head";

export default function Metadata({ title, description, image, url }) {
  return (
    <>
      <Head>
        <title>{title ? title : "Shakepay Clone"}</title>
        <meta
          name="description"
          content={description ? description : "Shakepay Clone App"}
        />
        <link
          rel="shortcut icon"
          href="/ShakepayLogo.svg"
          type="image/x-icon"
        />
      </Head>
    </>
  );
}
