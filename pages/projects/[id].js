import { getAllProjectsId, getProjectData } from "@/lib/projects";
import Image from "next/image";

export default function Project({ projectData }) {
  return (
    <div>
      <Image className="object-cover" src={`https://ik.imagekit.io/quasicraft/tr:w-1280,h-360/${projectData.image}.png`} width={1280} height={360} />
      <div className="pt-4 mx-4 md:mx-auto prose prose-slate dark:prose-invert">
        <h1 className="pb-0 mb-0 text-center">{projectData.title}</h1>
        <h3 className={`pb-0 pt-0 mt-0 mb-0 text-center ${projectData.status == "Ongoing" ? "text-orange-500" : "text-red-500" | projectData.status == "Needs deco" ? "text-yellow-500" :  "text-red-500" | projectData.status == "Done" ? "text-green-500" : "text-red-500"} font-bold`}>{projectData.status}</h3>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
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
