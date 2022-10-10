import { posts, TPost } from '@/data';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const fetchPosts = async (): Promise<TPost[]> => {
  return posts;
};

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    (async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    })();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <h3>
              <Link href={`/posts/${item.id}`}>{item.title}</Link>
            </h3>
            <div>
              <p>{item.content}</p>
              <p>{item.id}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
