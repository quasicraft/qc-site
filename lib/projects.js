import fs from "fs";
import matter from "gray-matter";

const projectDir = "./public/projects";

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectDir);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fileContents = fs.readFileSync(`./public/projects/${fileName}`, "utf-8");
    
    const frontmatter = matter(fileContents);

    return {
      id,
      ...frontmatter.data,
    }
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date)  {
      return 1;
    } else {
      return -1;
    }
  });
}