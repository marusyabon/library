import express from "express";
import connection from '../db';
import mysql from 'mysql2';
import path from 'path';

const router = express.Router();

router.post('/', function (req, res) {
	const file = req.body;

	const query = mysql.format('INSERT INTO `files` (`name`, `size`, `book_id`) VALUES (?,?,?)', [
		file.name,
		file.size,
		file.book_id,
	]);

	connection.query(query,
		function (err, results) {
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

router.post('/upload', (req, res) => {
	console.log(req)
	if (Object.keys(req.files).length == 0) {
		return res.status(400).send('No files were uploaded.');
	}

	const uploadedFile = req.files.upload;
	const fileName = uploadedFile.name;

	const _path = path.resolve('/library/data');

	uploadedFile.mv(`${_path}/${fileName}`, function (err) {
		if (!err) {
			res.send();
		}
		else {
			console.log(err);
			res.status(304);
		}
	});
});

export default router;