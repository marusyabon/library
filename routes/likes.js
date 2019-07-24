import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

/* GET users listing. */
router.post('/', function (req, res) {
	const book_id = req.body.bookId;
	const user_id = req.body.userId;

	const query = mysql.format("INSERT INTO likes (`book_id`, `user_id`) VALUES (?,?)", [book_id, user_id]);
	connection.query(
		query,
		function (err, results) {
			if (!err) {
				return res.send(results);
			}
			console.log(err);
			res.status(304).send(err);
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
				return res.send(results);
			}
			console.log(err);
			res.status(304).send(err);//errorHandler()
		}
	);
});

export default router;