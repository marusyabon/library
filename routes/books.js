import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

router.get('/', function (req, res) {
	const user_id = req.query.user_id;

	connection.query('SELECT * FROM books LEFT OUTER JOIN `likes` ON `books`.`id` = `likes`.`book_id` AND `likes`.`user_id` = ?', [user_id],
	// connection.query('SELECT books.*, likes.user_id, COUNT(likes.user_id) AS num_likes FROM `books` LEFT JOIN `likes` ON `likes`.`book_id` = `books`.`id` AND `likes`.`user_id` = ?', [user_id],
	// connection.query('SELECT * FROM books LEFT OUTER JOIN `likes` ON `books`.`id` = `likes`.`book_id` AND `likes`.`user_id` = ? LEFT OUTER JOIN `likes` ON `books`.`id` = `likes`.`book_id` COUNT(likes.user_id) AS num_likes', [user_id],
	// connection.query('SELECT * FROM books LEFT OUTER JOIN `likes` ON `books`.`id` = `likes`.`book_id` AND `likes`.`user_id` = ? GROUP BY `books`.`id`', [user_id],
		function (err, results) {
			console.log(results)
			if(!err) {
				console.log(results);
				res.status(200).send(results);
			}
			else {
				console.log(err);
				// res.status(304);
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
				res.status(304);
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