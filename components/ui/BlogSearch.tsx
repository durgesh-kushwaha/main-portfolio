"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";

type Post = {
  id: string;
  title: string;
  date: string;
  featuredImage?: string;
  description?: string;
};

export default function BlogSearch({ allPosts }: { allPosts: Post[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>(allPosts);

  const fuse = useMemo(() => new Fuse(allPosts, {
    keys: ["title", "description"],
    includeScore: true,
    threshold: 0.4,
  }), [allPosts]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(allPosts);
    } else {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(result => result.item));
    }
  }, [query, allPosts, fuse]); 

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or description..."
          className="search-input"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {results.length > 0 ? (
          results.map(({ id, title, date, featuredImage, description }) => (
            <Link key={id} href={`/blogs/${id}`} className="blog-post-card">
              <div className="blog-post-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="date">{date}</span>
              </div>
              {featuredImage && (
                <Image
                  src={featuredImage}
                  alt={title}
                  width={150}
                  height={150}
                  className="blog-post-card-image"
                />
              )}
            </Link>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </>
  );
}