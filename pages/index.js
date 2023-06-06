import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import styles from "../components/projects.module.css";

export default function Home({ recentProjects }) {
  return(
    <>
      <Head>
        <title>Quasicraft</title>
        <meta 
          name="description" 
          content="The website of the quasicraft server, we try to make the coolest and best-looking redstone contraptions out there." 
          key="desc" 
        />
        <meta 
          name="og:title" 
          content="Quasicraft" 
        />
        <meta 
          name="og:description" 
          content="The website of the quasicraft server, we try to make the coolest and best-looking redstone contraptions out there." 
        />
        <meta 
          name="og:image" 
          content="https://raw.githubusercontent.com/quasicraft/qc-site/807e5f317fde561d0e26c52b12d9f09bef762bd2/public/images/social-image.png" 
        />
        <meta 
          name="robots" 
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </Head>
      <div className="mx-8">
        <div id="recent-projects" className="mb-4">
          <h1 className="text-3xl font-bold mb-4">Recent projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProjects.map(({ id, status, title }) => (
              <div key={id} className="border-2 border-slate-800 rounded-xl flex flex-col">
                <Link href={`/projects/${id}`}><h1 className="px-4 pt-4 pb-2">{title}</h1></Link>
                <h2 color_code={status} className={styles.status}>{status}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const recentProjects = allProjectsData.slice(0, 3);
  return {
    props: {
      recentProjects,
    },
  };
}
