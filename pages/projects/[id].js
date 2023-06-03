import { getAllProjectsId, getProjectData } from "@/lib/projects";

export default function Project({ projectData }) {
  return (
    <div className="mx-auto prose prose-slate dark:prose-invert">
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