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
	const book_id = req.params.book_id;

	connection.query('SELECT * FROM `files` WHERE `book_id` = ?', [book_id],
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
			const file_size = uploadedFile.size;
			const file_user_id = req.body.user_id;
			const file_book_id = req.body.book_id;

			const query = mysql.format("INSERT INTO files (`name`, `size`, `url`, `book_id`, `user_id`, `data_type`) VALUES (?,?,?,?,?,?)", [fileName, file_size, _path, file_book_id, file_user_id, datatype]);
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