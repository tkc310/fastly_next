import { posts, TPost } from '@/data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TPost[]>
) {
  res.status(200).json(posts);
}
