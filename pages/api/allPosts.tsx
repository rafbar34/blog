// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {connectDatabase, getAllDocuments} from '@/utils/api/db-util';
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  posts: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await connectDatabase();

  const allPosts = await getAllDocuments('blog', client, 'posts');

  return res.status(200).json({posts: allPosts});
}
