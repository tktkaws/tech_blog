import Link from "next/link";
import { client } from "../libs/client";
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/Layout";


//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (

    <div className="container flex flex-col justify-center items-center">
      <Layout></Layout>

      <h1 className="text-5xl font-bold">Hello world!</h1>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <p>{blog.title}</p>
          </Link>
        </li>
      ))}

    </div>
  );
}
