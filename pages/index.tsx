import Link from "next/link";
import Layout from "../components/Layout";
import { Wallet } from "../components/Wallet";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-xl font-bold">Hello Next.js + TS + Tailwind CSS👋!</h1>
    <div>
      <Wallet />
    </div>
    <p>
      <Link href="/about">
        <a> About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
