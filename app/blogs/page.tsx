import { getSortedPostsData } from "../../lib/markdown";
import BlogSearch from "../../components/ui/BlogSearch";

export default function BlogsPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="container section">
      <h1 className="section-title">All Blog Posts</h1>
     
      <BlogSearch allPosts={allPosts} />
    </div>
  );
}