import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { FC, useCallback, useState } from "react";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

type Props = {
  items: Token[];
};

export type Token = {
  pkey: string;
  balance: bigint;
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const { connection } = useConnection();

  const { publicKey } = useWallet();
  const tokens: Token[] = [];
  if (publicKey) {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );
    tokenAccounts.value.forEach((e) => {
      const tempToken: Token = {
        pkey: e.account.data.parsed.info.mint,
        balance: e.account.data.parsed.info.tokenAmount.uiAmount,
      };
      tokens.push(tempToken);
    });
  }
  console.log(tokens);
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  return { props: { tokens } };
};

export default WithStaticProps;
