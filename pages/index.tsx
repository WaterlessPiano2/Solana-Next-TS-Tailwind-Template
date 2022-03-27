import Link from "next/link";
import Layout from "../components/Layout";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SendOneLamportToRandomAddress } from "../components/Send";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-xl font-bold">Hello Next.js + TS + Tailwind CSS👋!</h1>
    <div>
      <WalletMultiButton />
      <SendOneLamportToRandomAddress />
    </div>
    <p>
      <Link href="/about">
        <a> About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
