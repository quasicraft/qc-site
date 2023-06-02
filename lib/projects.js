import fs from "fs";
import matter from "gray-matter";

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync("./projects");
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fileContents = fs.readFileSync(`./projects/${fileName}`, "utf-8");
    
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