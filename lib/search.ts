import Fuse from 'fuse.js'
import { BlogPost, Project } from './markdown'

export interface SearchResult {
  type: 'blog' | 'project'
  title: string
  excerpt: string
  url: string
  tags?: string[]
}

export function createSearchIndex(posts: BlogPost[], projects: Project[]) {
  const searchData: SearchResult[] = [
    ...posts.map((post) => ({
      type: 'blog' as const,
      title: post.title,
      excerpt: post.excerpt,
      url: `/blogs/${post.slug}`,
      tags: post.tags,
    })),
    ...projects.map((project) => ({
      type: 'project' as const,
      title: project.title,
      excerpt: project.description,
      url: `/projects/${project.id}`,
      tags: project.technologies,
    })),
  ]

  const fuseOptions = {
    keys: ['title', 'excerpt', 'tags'],
    threshold: 0.3,
    includeScore: true,
  }

  return new Fuse(searchData, fuseOptions)
}

export function searchContent(query: string, posts: BlogPost[], projects: Project[]): SearchResult[] {
  const searchIndex = createSearchIndex(posts, projects)
  const results = searchIndex.search(query)
  
  return results
    .filter((result) => result.score && result.score < 0.5)
    .map((result) => result.item)
    .slice(0, 10)
}


