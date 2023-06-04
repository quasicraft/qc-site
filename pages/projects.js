import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";
import styles from "../components/projects.module.css";

export default function Projects({ allProjectsData }) {
  return(
    <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allProjectsData.map(({ id, status, title }) => (
        <div key={id} className="m-4 border-2 border-slate-800 rounded-xl flex flex-col">
          <Link href={`/projects/${id}`}><h1 className="px-4 pt-4 pb-2">{title}</h1></Link>
          <h2 color_code={status} className={styles.status}>{status}</h2>
        </div>
      ))}
    </div>
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