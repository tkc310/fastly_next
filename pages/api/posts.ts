import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  id: string;
  title: string;
  content: string;
}

const posts: Post[] = [...Array(3)].map((_, idx) => {
  const suffix = idx + 1;

  return {
    id: `uuid-${suffix}`,
    title: `title-${suffix}`,
    content: `content-${suffix}`,
  };
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | Post[]>
) {
    const { id } = req.query;
    if (id) {
      const post = posts.find((item) => item.id === id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404);
      }
    } else {
      res.status(200).json(posts)
    }
}
