import express from "express";
const router = express.Router();
import connection from '../db';
import mysql from 'mysql2';

router.get('/', (req, res) => {
	// const cookie = req.headers.cookie;
	// const cookieArr = cookie.split(' ');
	// cookieArr.forEach((el) => {
	// 	if (el.indexOf('jwt') == 0) {
	// 		const token = el.split("=")[1];
	// 		const currentDate = new Date();

			// console.log(token, currentDate);

			// const query = mysql.format('INSERT INTO `tokens` (`invalidToken`,  `currentDate`) VALUES=?', [token, null]);
			// connection.query(
			// 	query,
			// 	function (err, result) {
			// 		if (!err) {
						// res.clearCookie('jwt');
						// res.status(200).send();
			// 		}					
			// 	}
	// 		// );
	// 	}
	// });	
	res.status(200).send();
});

export default router;