import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

/* GET users listing. */
router.get('/', function (req, res) {
	connection.query('SELECT books.*, likes.user_id from `books` LEFT JOIN `likes` ON `id` = `book_id`',
		function (err, results) {
			if(!err) {
				return res.send(results);
			}
			res.status(304);
		}
	);	
});

router.put('/', function (req, res, next) {
	const book = req.body;
	const query = mysql.format('UPDATE `books` SET `cover_photo` = ?, `book_title` = ?, `number_of_pages` = ?, `author_name` = ?, `publishing_house` = ?, `country_of_publication` = ?, `genres` = ?, `available_copies` = ? WHERE `id` = ?', [
		book.cover_photo,
		book.book_title,
		+book.number_of_pages || 0,
		book.author_name,
		book.publishing_house,
		book.country_of_publication,
		(book.genres),
		+book.available_copies || 0,
		book.id
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

router.delete('/', function (req, res) {
	const book_id = req.body.row;
	const query = mysql.format("DELETE FROM `books` WHERE `id` = ?", [book_id]);

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


export default router;