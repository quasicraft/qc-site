import { getAllProjectsId, getProjectData } from "@/lib/projects";
import Image from "next/image";
import styles from "../../components/id.module.css";

export default function Project({ projectData }) {
  return (
    <div>
      <Image className="object-cover" src={`https://ik.imagekit.io/quasicraft/tr:w-1280,h-360/${projectData.image}.png`} width={1280} height={360} />
      <div className="pt-4 mx-4 md:mx-auto prose">
        <h1 className={styles.title}>{projectData.title}</h1>
        <h3 color_code={projectData.status} className={styles.status}>{projectData.status}</h3>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllProjectsId();

  return {
    paths,
    fallback: false
  }
}