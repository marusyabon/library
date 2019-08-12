import { Router } from 'express';
const router = Router();
import connection from '../db';
import mysql from 'mysql2';

router.get('/:id', function (req, res, next) {
	const id = req.params.id;
	const query = mysql.format('SELECT comments.*, users.user_name, users.user_surname FROM comments LEFT JOIN users ON comments.user_id = users.id WHERE comments.book_id = ?', [id]);

	connection.query(query,
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				console.log(err);
				res.send(err);
			}
		}
	);
});

export default router;