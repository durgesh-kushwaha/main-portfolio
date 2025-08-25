import { getPostData, getAllPostIds } from "../../../lib/markdown";
import Image from "next/image";
import AuthorCardSidebar from "../../../components/ui/AuthorCardSidebar";
import RecentPostsSidebar from "../../../components/ui/RecentPostsSidebar";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(p => ({ slug: p.params.slug }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);
  return (
    <div className="container section">
      <div className="blog-layout-container">
        <main className="blog-post-main">
          <h1 className="blog-post-title">{postData.title}</h1>
          <p className="blog-post-date">{postData.date}</p>
          {postData.featuredImage && (
              <div style={{ marginBottom: '2rem' }}>
                  <Image
                      src={postData.featuredImage}
                      alt={postData.title}
                      width={800}
                      height={400}
                      style={{ borderRadius: '15px', objectFit: 'cover', width: '100%' }}
                  />
              </div>
          )}
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </main>

        <div className="blog-sidebar">
          <AuthorCardSidebar />
          <RecentPostsSidebar />
        </div>
      </div>
    </div>
  );
}