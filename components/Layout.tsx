import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};
// get current year for copyright
const currentYear = new Date().getFullYear();

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="grid grid-rows-3 h-screen content-between p-4">
      <header>
        <nav className="mb-4">
          <Link href="/">
            <a className="text-white bg-sky-600 hover:bg-sky-700 p-2 rounded-lg mx-1">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-white bg-sky-600 hover:bg-sky-700 p-2 rounded-lg mx-1">
              About
            </a>
          </Link>
          {/* <Link href="/users">
            <a className="text-white bg-sky-600 hover:bg-sky-700 p-2 rounded-lg mx-1">
              Users List
            </a>
          </Link> */}
          <Link href="/tokens">
            <a className="text-white bg-sky-600 hover:bg-sky-700 p-2 rounded-lg mx-1">
              Tokens List
            </a>
          </Link>
        </nav>
        <hr />
      </header>
      <div className="place-self-center">{children}</div>
      <footer className="grid content-end">
        <hr />
        <span>{`I'm here to stay (Footer)  ${currentYear}`}</span>
      </footer>
    </div>
  </div>
);

export default Layout;
