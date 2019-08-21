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

router.get('/:id/ids', function (req, res, next) {
	const id = req.params.id;
	const query = mysql.format('SELECT book_id AS id FROM orders WHERE user_id = ? AND return_date IS NULL', [id]);

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

router.put('/', (req, res) => {
	const userId = req.body.user_id;
	const ordersIds = req.body.orders;
	const orders = ordersIds.split(',');
	const dateNow = new Date();

	const findAllOrders = mysql.format('SELECT * FROM orders WHERE user_id = ?', [userId]); 

	connection.query(findAllOrders, function (err, results) {
		if (!err) {
			const response = {};
			orders.forEach((bookId) => {
				const orderExists = results.find((dbRecord) => {
					return dbRecord.book_id === +bookId;
				});

				const orderOpened =  results.find((dbRecord) => {
					return dbRecord.book_id === +bookId && !dbRecord.return_date;
				});

				if(!orderExists || orderExists && !orderOpened) {
					const addNewOrder = mysql.format('INSERT INTO `orders` (`user_id`, `book_id`, `order_date`) VALUES (?,?,?)', [userId, bookId, dateNow]);
					connection.query(addNewOrder, function(err, res) {
						if(err) {
							response.status = 'error';
						}
					});
				}
			});	

			results.forEach((dbRecord) => {
				const match = orders.find(id => dbRecord.book_id == id);
				if(!match) {
					const closeOrder = mysql.format('UPDATE `orders` SET `return_date` = ? WHERE id = ?', [dateNow, dbRecord.id]);
					connection.query(closeOrder, function(err, res) {
						if(err) {
							response.status = 'error';
						}
					});
				}
			});

			res.send(results);		
		}
		else {
			console.log(err);
			res.status(500);
		}
	});
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