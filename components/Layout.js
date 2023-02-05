import Head from "next/head";
import { Children } from "react/cjs/react.production.min";
const name = "don't test da master";
export const siteTitle = "don't test da master";

function Layout() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header className="bg-black text-white">
        {/* <img src="/images/sample.jpg" alt="" /> */}
        <h1 className="text-4xl uppercase">{name}</h1>
      </header>
      {/* <main>{children}</main> */}
    </div>
  );
}

export default Layout;
