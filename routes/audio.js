import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import connection from '../db';

const router = Router();

router.get('/:id', (req, res) => {
	const id = req.params.id;

	connection.query('SELECT name FROM `files` WHERE id = ?', [id],
		function (err, results) {
			if(!err) {
				const name = results[0].name;
				const _path = path.resolve(`/library/data/audio/${name}`);

				var inputStream = fs.createReadStream(_path);
				inputStream.pipe(res);
			}
			else {
				res.status(500);
			}
		}
	);
});

export default router;