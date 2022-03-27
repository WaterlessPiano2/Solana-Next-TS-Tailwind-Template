import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-xl font-bold">Hello Next.js + TS + Tailwind CSS👋!</h1>
    <p>
      <Link href="/about">
        <a> About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
