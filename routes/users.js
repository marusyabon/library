import { Router } from 'express';
const router = Router();
import connection from '../db';
import mysql from 'mysql2';
import bcrypt from "bcrypt";

/* GET users listing. */
router.get('/', function (req, res, next) {
	connection.query('SELECT users.*, capabilities.role_name FROM `users` LEFT JOIN `capabilities` ON `capabilities_id` = `capabilitie_id`',
		function (err, results) {
			if (!err) {
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
			if (!err) {
				res.send(results);
			}
		}
	);
});

router.post('/', (req, res) => {
	const user = req.body;
	const hashCost = 10;
	bcrypt.hash(user.account_password, hashCost).then((hashedPassword) => {
		const query = mysql.format('INSERT INTO `users` (`user_name`, `user_surname`, `capabilities_id`, `passport_ID`, `birth_date`, `address`, `phone_numbers`, `email`, `account_password`) VALUES (?,?,?,?,?,?,?,?,?)', [
			user.user_name,
			user.user_surname,
			1,
			user.passport_ID,
			user.birth_date || null,
			user.address,
			user.phone_numbers,
			user.email,
			hashedPassword
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
});

router.put('/', function (req, res, next) {
	const user = req.body;
	const query = mysql.format('UPDATE `users` SET `user_name` = ?, `user_surname` = ?, `passport_ID` = ?, `birth_date` = ?, `address` = ?, `phone_numbers` = ?, `email` = ?, `capabilities_id` = ? WHERE `id` = ?', [
		user.user_name,
		user.user_surname,
		user.passport_ID,
		user.birth_date || null,
		user.address,
		user.phone_numbers,
		user.email,
		user.capabilities_id,
		user.id
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

export default router;