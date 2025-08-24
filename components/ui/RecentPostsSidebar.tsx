import Link from 'next/link';
import { getSortedPostsData } from '../../lib/markdown';

const RecentPostsSidebar = () => {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 5);

  return (
    <div className="recent-posts-card">
      <h4>Recent Posts</h4>
      <ul>
        {recentPosts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/blogs/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPostsSidebar;