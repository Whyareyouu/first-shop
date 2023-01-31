// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { users } from './data/users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(users);
	} else if (req.method === 'POST') {
		const user = req.body;
		const newUser = {
			id: Date.now(),
			...user,
		};
		users.push(newUser);
		res.status(201).json(newUser);
	}
}
