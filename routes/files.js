import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';
import path from 'path';

const router = Router();

router.post('/', (req, res) => {
	const file = req.body;

	const query = mysql.format('INSERT INTO `files` (`name`, `size`, `book_id`) VALUES (?,?,?)', [
		file.name,
		file.size,
		file.book_id,
	]);

	connection.query(query,
		(err, results) => {
			if (!err) {
				res.send(results);
			}
			else {
				console.log(err);
				res.status(304);
			}
		}
	);
});

router.post('/upload/:datatype', (req, res) => {
	const datatype = req.url.split('/')[2];

	if (req.files && Object.keys(req.files).length == 0) {
		return res.status(400).send('No files were uploaded.');
	}

	const uploadedFile = req.files.upload;
	const fileName = uploadedFile.name;
	const _path = path.resolve(`/library/data/${datatype}`);
	const url = `${_path}/${fileName}`;

	uploadedFile.mv(url, function (err) {
		if (!err) {
			const file_size = uploadedFile.size;
			const file_user_id = req.body.user_id;
			const file_book_id = req.body.book_id;

			const query = mysql.format("INSERT INTO files (`name`, `size`, `url`, `book_id`, `user_id`) VALUES (?,?,?,?,?)", [fileName, file_size, _path, file_book_id, file_user_id]);
			connection.query(
				query,
				(err) => {
					if (!err) {
						return res.send({message: 'Success'});
					}
					console.log(err);
					return res.status(304);
				}
			);

		}
		else {
			console.log(err);
			res.status(304);
		}
	});
});

export default router;