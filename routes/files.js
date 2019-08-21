import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';
import path from 'path';
const router = Router();

router.get('/', (req, res) => {
	connection.query('SELECT * FROM `files`',
		function (err, results) {
			if(!err) {
				res.send(results);
			}
			else {
				res.status(500);
			}			
		}
	);	
});

router.get('/:book_id', (req, res) => {
	const bookId = req.params.book_id;

	connection.query('SELECT * FROM `files` WHERE `book_id` = ?', [bookId],
		function (err, results) {
			if(!err) {
				res.send(results);
			}
			else {
				res.status(500);
			}
		}
	);	
});

router.get('/download/:id', (req, res) => {
	const id = req.params.id;

	connection.query('SELECT * FROM `files` WHERE `id` = ?', [id],
		function (err, results) {
			const file = results[0];
			if(!err) {
				res.download(path.join(file.url, file.name));
			}
			else {
				res.status(500);
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
			const fileSize = uploadedFile.size;
			const fileUserId = req.body.user_id;
			const fileBookId = req.body.book_id;

			const query = mysql.format('INSERT INTO files (`name`, `size`, `url`, `book_id`, `user_id`, `data_type`) VALUES (?,?,?,?,?,?)', [fileName, fileSize, _path, fileUserId, fileBookId, datatype]);
			connection.query(
				query,
				(err) => {
					if (!err) {
						res.send({message: 'Success'});
					}
					else {
						console.log(err);
						res.status(500);
					}

				}
			);
		}
		else {
			console.log(err);
			res.status(500);
		}
	});
});

export default router;