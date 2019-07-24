import express from "express";
import connection from '../db';
import mysql from 'mysql2';

const router = express.Router();

router.post('/', (req, res) => {
	const cookie = req.headers.cookie;
	const cookieArr = cookie.split(' ');
	
	cookieArr.forEach((el) => {
		if (el.indexOf('jwt') == 0) {
			const token = el.split('=')[1];
			const date = req.body.currentDate;

			const query = mysql.format('INSERT INTO tokens (`invalidToken`, `currentDate`) VALUES (?,?)', [token, date]);
			connection.query(
				query,
				function (err, result) {
					if (!err) {
						res.clearCookie('jwt');
						return res.send();
					}				
					console.log(err);
					res.status(304).send();	
				}
			);
		}
	});	
});

export default router;