import { Router } from 'express';
const router = Router();
import connection from '../db';

/* GET users listing. */
router.get('/', function (req, res) {
	console.log(req)
	connection.query('SELECT books.*, likes.user_id from `books` LEFT JOIN `likes` ON `id` = `book_id`',
		function (err, results) {
			if(!err) {
				console.log(results)
				return res.send(results);
			}
			res.status(304);
		}
	);	
});

export default router;