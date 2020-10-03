import { document } from 'data';
import { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.json(document);
}

export default handler;
