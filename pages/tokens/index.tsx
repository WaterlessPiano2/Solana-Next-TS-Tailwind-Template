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

const tokens = ({ items }: Props) => {
  const { connection } = useConnection();

  const { publicKey } = useWallet();
  const [tokens, setTokens] = useState<Token[]>([]);

  React.useEffect(() => {
    if (publicKey) getTokensData();
  }, [publicKey]);

  const getTokensData = useCallback(async () => {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );
    const tempTokenAccounts = [];
    tokenAccounts.value.forEach((e) => {
      const tempToken: Token = {
        pkey: e.account.data.parsed.info.mint,
        balance: e.account.data.parsed.info.tokenAmount.uiAmount,
      };
      tempTokenAccounts.push(tempToken);
    });

    setTokens(tempTokenAccounts);
  }, [publicKey]);

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1 className="text-xl font-bold">Tokens List</h1>
      <List items={tokens} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default tokens;
