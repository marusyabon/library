import { Router } from 'express';
const router = Router();
import connection from '../db';

/* GET users listing. */
router.get('/', function (req, res) {
	connection.query('SELECT * FROM `books` LEFT JOIN `likes` ON `id` = `book_id`',
		function (err, results) {
			if(!err) {
				return res.send(results);
			}
			res.status(304);
		}
	);	
});

export default router;