import Link from "next/link";
import Layout from "../components/Layout";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import { SendOneLamportToRandomAddress } from "../components/Send";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-xl font-bold">Hello Next.js + TS + Tailwind CSS👋!</h1>
    <div>
      <WalletConnectButton className="btn hover:bg-violet-600 bg-violet-800 text-white disabled:bg-purple-400" />
      <div className="btn hover:bg-violet-600 bg-violet-800 text-white disabled:bg-purple-400 p-4 mt-4 rounded-md">
        <SendOneLamportToRandomAddress />
      </div>
    </div>
    <p>
      <Link href="/about">
        <a> About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
