import { Router } from 'express';
const router = Router();
import connection from '../db';
import mysql from 'mysql2';

router.get('/:id', function (req, res, next) {
	const id = req.params.id;
	const query = mysql.format('SELECT orders.*, books.book_title, books.author_name FROM orders LEFT JOIN books ON orders.book_id = books.id WHERE orders.user_id = ?', [id]);

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

router.post('/', (req, res) => {
	const order = req.body;

	const query = mysql.format('INSERT INTO `orders` (`user_id`, `book_id`, `order_date`) VALUES (?,?,?)', [
		order.user_id,
		order.book_id,
		order.order_date
	]);

	connection.query(query,
		function (err, results) {
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

router.delete('/', function (req, res) {
	const id = req.body.row;
	const query = mysql.format("DELETE FROM `orders` WHERE `id` = ?", [id]);

	connection.query(
		query,
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				console.log(err);
				res.status(500).send(err);
			}
			
		}
	);
});

export default router;