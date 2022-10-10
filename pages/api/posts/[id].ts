import { posts, TPost } from '@/data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPost>
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
    res.status(400);
  }
}
