import passport from'passport';
import Local from 'passport-local';
import JWT from 'passport-jwt';
// import bcrypt from 'bcrypt';
import connection from '../db';

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
}, (email, password, done) => {
	try {		
		connection.query(
			'SELECT * FROM `users` WHERE `email` = email',
			function (err, results, fields) {
				const user_password = results[0].user_password;
				console.log(fields);

				if(password == user_password) {
					return done(null, results);
					/*bcrypt.compare(password, userDocument.passwordHash, (err, isMatch) => {
						if (isMatch) {
							return done(null, userDocument);
						} else {
							return done('Incorrect Username / Password');
						}
					});	*/
				}
				else {
					return done('Incorrect Username / Password');
				}
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