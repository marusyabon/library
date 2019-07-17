import { Router } from 'express';
const router = Router();
import connection from '../db';
import mysql from 'mysql2';

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
			res.status(304).send(err);
		}
	);
});

export default router;