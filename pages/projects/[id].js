import { getAllProjectsId, getProjectData } from "@/lib/projects";
import Image from "next/image";

export default function Project({ projectData }) {
  return (
    <div className="mx-4 md:mx-auto prose prose-slate dark:prose-invert">
        <Image className="object-cover" src={`https://ik.imagekit.io/quasicraft/tr:w-1280,h-360/${projectData.image}.png`} width={1280} height={360} />
      <h1 className="pb-0 mb-0 text-center">{projectData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
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