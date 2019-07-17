import { Router } from 'express';
const router = Router();
import connection from '../db';
import mysql from 'mysql2';

/* GET users listing. */
router.get('/', function (req, res, next) {
	connection.query('SELECT * FROM `users`',
		function (err, results) {
			if(!err) {
				res.send(results);
			}
		}
	);	
});

router.get('/:id', function (req, res, next) {
	const id = req.params.id;
	const query = mysql.format('SELECT * FROM `users` WHERE `id` = ?', [id]);

	connection.query(query,
		function (err, results) {
			if(!err) {
				res.send(results);
			}
		}
	);	
});

router.put('/', function (req, res, next) {
	const user = req.body;
	const query = mysql.format('UPDATE `users` SET `user_name` = ?, `user_surname` = ?, `passport_ID` = ?, `birth_date` = ?, `address` = ?, `phone_numbers` = ?, `email` = ? WHERE `id` = ?', [
		user.user_name,
		user.user_surname,
		user.passport_ID,
		user.birth_date || null,
		user.address,
		user.phone_numbers,
		user.email,
		user.id
	]);

	connection.query(query,
		function (err, results) {
			if(!err) {
				res.send(results);
			}
		}
	);
});

export default router;