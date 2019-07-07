import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "library",
	password: "password",
	insecureAuth: true,
});

connection.connect(function (err) {
	if (err) {
		return console.error("Error: " + err.message);
	}
	else {
		console.log("Db successfully connected!");
	}
});

export default connection;