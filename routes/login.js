import express from "express";
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res, next) => {
	passport.authenticate(
		'local',
		{ session: false },
		(error, user) => {
			if (error || !user) {
				res.status(400).json({ error:error });
			}
			else {				
				/** assigns payload to req.user */
				req.login(user, { session: false }, (error) => {

					/** This is what ends up in our JWT */
					const payload = {
						id: user.id,
						role: user.role_name,
						email: user.email,
						expires: Date.now() + 10800000,
					};

					if (error) {
						res.status(400).send({ error:error });
					}

					/** generate a signed json web token and return it in the response */
					const token  = jwt.sign(JSON.stringify(payload), "your_jwt_secret");
					/** assign our jwt to the cookie */
					res.cookie('jwt', token, { maxAge: 900000 });
					res.json({ success: true, user: user });
				});
			}
		}
	)(req, res, next);
});

export default router;