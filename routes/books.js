import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

router.get('/', function (req, res) {
	const userId = req.query.user_id;

	connection.query('SELECT *, (SELECT count(*) FROM likes where likes.book_id = books.id) count_likes FROM books LEFT OUTER JOIN likes ON books.id = likes.book_id and likes.user_id = ?', [userId],
		function (err, results) {
			if(!err) {
				res.status(200).send(results);
			}
			else {
				console.log(err);
				res.status(500);
			}			
		}
	);	
});

router.post('/', function (req, res, next) {
	const book = req.body;
	const query = mysql.format('INSERT INTO `books` (`cover_photo`, `book_title`, `number_of_pages`, `author_name`, `publishing_house`, `country_of_publication`, `genres`, `available_copies`) VALUES (?,?,?,?,?,?,?,?)', [
		book.cover_photo,
		book.book_title,
		+book.number_of_pages || 0,
		book.author_name,
		book.publishing_house,
		book.country_of_publication,
		(book.genres),
		+book.available_copies || 0
	]);

	connection.query(query,
		function (err, results) {
			if (!err) {
				res.status(200).send(results);
			}
			else {
				console.log(err);
				res.status(500);
			}
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
				res.status(500);
			}
		}
	);
});

router.delete('/', function (req, res) {
	const bookId = req.body.row;
	const query = mysql.format("DELETE FROM `books` WHERE `id` = ?", [bookId]);

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