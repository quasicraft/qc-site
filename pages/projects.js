import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import styles from "../components/projects.module.css";
import Head from "next/head";

export default function Projects({ allProjectsData }) {
  return(
    <>
      <Head>
        <title>Quasicraft - Projects</title>
        <meta 
          name="description" 
          content="Quasicraft's project list. Check out the status on every project we're working on and what we've been up to recently!" 
          key="desc" 
        />
        <meta 
          name="og:title" 
          content="Quasicraft - Projects" 
        />
        <meta 
          name="og:description" 
          content="Quasicraft's project list. Check out the status on every project we're working on and what we've been up to recently!" 
        />
        <meta 
          name="og:image" 
          content="https://raw.githubusercontent.com/quasicraft/qc-site/807e5f317fde561d0e26c52b12d9f09bef762bd2/public/images/social-image.png" 
        />
      </Head>
      <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allProjectsData.map(({ id, status, title }) => (
          <div key={id} className="m-4 border-2 border-slate-800 rounded-xl flex flex-col">
            <Link href={`/projects/${id}`}><h1 className="px-4 pt-4 pb-2">{title}</h1></Link>
            <h2 color_code={status} className={styles.status}>{status}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
