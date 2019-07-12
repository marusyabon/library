import { Router } from 'express';
const router = Router();
import connection from '../db';

/* GET users listing. */
router.get('/', function (req, res, next) {
	connection.query('SELECT * FROM `users`',
		function (err, results) {
			if(!err) {
				res.send({data:results});
			}
		}
	);	
});

export default router;