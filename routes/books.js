import { Router } from 'express';
const router = Router();
import connection from '../db';

/* GET users listing. */
router.get('/', function (req, res) {
	connection.query('SELECT * FROM `books`',
		function (err, results) {
			if(!err) {
				res.send({data:results});
			}
		}
	);	
});

export default router;