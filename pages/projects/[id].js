import { getAllProjectsId, getProjectData } from "@/lib/projects";
import Image from "next/image";
import styles from "../../components/id.module.css";
import Head from "next/head";

export default function Project({ projectData }) {
  return (
    <>
      <Head>
        <title>{projectData.title} - Quasicraft</title>
        <meta 
          name="description" 
          content="Check out our gallery, with  amazing high-quality shots of all the beautiful builds on the quasicraft server." 
          key="desc" 
        />
        <meta 
          name="og:title" 
          content={`${projectData.title} - Quasicraft`}
        />
        <meta 
          name="og:description" 
          content={`Current status of the ${projectData.title} project is: ${projectData.status}`}
        />
        <meta 
          name="og:image" 
          content={`https://ik.imagekit.io/quasicraft/tr:w-1200,h-630/${projectData.image}.png`}
        />
        <meta 
          name="robots" 
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </Head>
      <Image className="object-cover" src={`https://ik.imagekit.io/quasicraft/tr:w-1280,h-360/${projectData.image}.png`} width={1280} height={360} />
      <div className="pt-4 mx-4 md:mx-auto prose">
        <h1 className={styles.title}>{projectData.title}</h1>
        <h3 color_code={projectData.status} className={styles.status}>{projectData.status}</h3>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>
    </>
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
