import { TPost } from '@/data';
import type { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const fetchPost = async (id: TPost['id']): Promise<TPost> => {
  const res = await fetch(`/api/posts/${id}`);
  const data = await res.json();
  return data;
};

const isId = (id: NextRouter['query']['id']): id is string =>
  typeof id === 'string';

const Post: NextPage = () => {
  const [post, setPost] = useState<TPost | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      (async () => {
        const { id } = router.query;

        if (isId(id)) {
          const post = await fetchPost(id);
          setPost(post);
        }
      })();
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      <h2>Post Detail</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <div>
            <p>{post.content}</p>
            <p>{post.id}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
