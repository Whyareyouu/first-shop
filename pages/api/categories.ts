// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { categories } from './data/categoies';
interface Сategories {
	category: string;
	_id: string;
	path: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Сategories[]>
) {
	res.status(200).json(categories);
}
