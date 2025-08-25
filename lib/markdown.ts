import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { formatDate } from './utils';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  featuredImage?: string;
  description?: string;
  slug?: string;
  contentHtml?: string;
  tags?: string[];
  excerpt?: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  thumbnail?: string;
  github?: string;
  demo?: string;
  technologies?: string[];
}

const postsDirectory = path.join(process.cwd(), 'content/blogs');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      date: formatDate(matterResult.data.date),
      // Add description here
      ...(matterResult.data as { title: string; featuredImage?: string; description?: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    date: formatDate(matterResult.data.date),
    // Add description here too
    ...(matterResult.data as { title: string; featuredImage?: string; description?: string }),
  };
}

