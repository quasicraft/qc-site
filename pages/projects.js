import { getSortedProjectsData } from "@/lib/projects";

export default function Projects({ allProjectsData }) {
  return(
    <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allProjectsData.map(({ frontmatter, id, date, status, title }) => (
        <div key={id} className="m-4 border-2 border-slate-800 rounded-xl flex flex-col">
          <h1 className="px-4 pt-4 pb-2">{title}</h1>
          <h2 className={`px-4 pb-4 
          ${status == "Ongoing" ? "text-orange-500" : "text-red-500" | status == "Needs deco" ? "text-yellow-500" :  "text-red-500" | status == "Done" ? "text-green-500" : "text-red-500"}`}>
            <b>{status}</b>
          </h2>
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