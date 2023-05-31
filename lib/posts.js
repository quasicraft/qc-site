import fs from "fs";
import matter from "gray-matter";

const postsDir = "./public/projects";

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fileContents = fs.readFileSync(`./public/projects/${fileName}`, "utf-8");
    
    const frontmatter = matter(fileContents);

    return {
      id,
      ...frontmatter.data,
    }
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date)  {
      return 1;
    } else {
      return -1;
    }
  });
}