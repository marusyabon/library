import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

router.get('/:book_id', (req, res) => {
	const bookId = req.params.book_id;

	connection.query('SELECT * FROM `likes` WHERE `book_id` = ?', [bookId],
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

router.post('/', function (req, res) {
	const book_id = req.body.bookId;
	const user_id = req.body.userId;

	const query = mysql.format("INSERT INTO likes (`book_id`, `user_id`) VALUES (?,?)", [book_id, user_id]);
	connection.query(
		query,
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				console.log(err);
				res.status(304).send(err);
			}
			
		}
	);
});

router.delete('/', function (req, res) {
	const book_id = req.body.bookId;
	const user_id = req.body.userId;

	const query = mysql.format("DELETE FROM likes WHERE `book_id` = ? AND `user_id` = ?", [book_id, user_id]);
	connection.query(
		query,
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				console.log(err);
				res.status(304).send(err);
			}			
		}
	);
});

export default router;