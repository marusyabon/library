import express from "express";
import bcrypt from "bcrypt";
import connection from '../db';
import mysql from 'mysql2';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
	const { username, password } = req.body;
	const hashCost = 10;
	const role = 1;

	try {
		const query = mysql.format('SELECT * FROM `users` WHERE `email` = ?', [username]);

		connection.query(
			query,
			function (err, results) {
				if (results.length > 0) {
					return res.send({data: 'Such user already exists', reason: 'userExist'});
				}	
				bcrypt.hash(password, hashCost).then((ps) => {
					const query = mysql.format("INSERT INTO users (`email`, `account_password`, `capabilities_id`) VALUES (?,?,?)", [username, ps, role]);
					connection.query(
						query,
						function (err, result) {
							if (err) {
								console.error(err.stack);
								return res.send({data: err});
							}

							const payload = {
								id: result.insertId,
								role: 'reader',
								email: username,
								expires: Date.now() + 10800000,
							};
		
							const token  = jwt.sign(JSON.stringify(payload), "your_jwt_secret");
							/** assign our jwt to the cookie */
							res.cookie('jwt', token, { maxAge: 900000 });
							res.status(200).send({id: result.insertId, status: result.serverStatus});
						}
					);
				});	
			}			
		);

	} catch (error) {
		res.status(400).send({
			error: 'req body should take the form { username, password }',
		});
	}
});

export default router;