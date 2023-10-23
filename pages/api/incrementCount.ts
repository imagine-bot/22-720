import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { count } = req.body;
  console.log(`Counter incremented to ${count}`);
  res.status(200).json({ message: 'Counter incremented' });
}