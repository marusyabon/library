import passport from'passport';
import Local from 'passport-local';
import JWT from 'passport-jwt';
import bcrypt from 'bcrypt';
import connection from '../db';
import mysql from 'mysql2';

const LocalStrategy = Local.Strategy;
const JWTStrategy = JWT.Strategy;

const cookieExtractor = (req) => {
	let token = null;
	const cookie = req.headers.cookie;
	if (req && cookie) {
		const cookieArr = cookie.split(' ');
		cookieArr.forEach((el) => {
			if (el.indexOf('jwt') == 0) {
				token = el.split("=")[1];
			}
		});
	}
	return token;
};
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = "your_jwt_secret";

passport.use('local', new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password',
}, (username, password, done) => {
	try {		
		const query = mysql.format('SELECT * FROM `users` INNER JOIN `capabilities` ON (users.`capabilities_id` = capabilities.`capabilitie_id`) WHERE `email` = ?', [username]);
		
		connection.query(
			query,
			function (err, results) {
				const user_password = results[0] ? results[0].account_password : '';

				bcrypt.compare(password, user_password, (err, isMatch) => {
					if (isMatch) {
						return done(null, results[0]);
					} else {
						return done(err, 'Incorrect Username / Password');
					}
				});	
			}
		);		
	} catch (error) {
		done(error);
	}
}));

passport.use('jwt', new JWTStrategy(opts, (jwtPayload, done) => {
	if (Date.now() > jwtPayload.expires) {
		return done('jwt expired');
	}

	return done(null, jwtPayload);
}
));