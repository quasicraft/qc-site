import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';

const projectsDir = "./projects";

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDir);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    
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

export function getAllProjectsId() {
  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
