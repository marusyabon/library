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
				return res.status(400).json({ error:error });
			}

			/** This is what ends up in our JWT */
			const payload = {
				id: user.user_id,
				// firstname: user.user_name,
				// lastname: user.user_surname,
				role: user.role_name,
				// passport_id: user.passport_ID,
				// birth_date: user.birth_date,
				// address: user.address,
				// phone_number: user.phone_number,
				email: user.email,
				expires: Date.now() + 10800000,
			};

			/** assigns payload to req.user */
			req.login(payload, { session: false }, (error) => {
				if (error) {
					res.status(400).send({ error:error });
				}

				/** generate a signed json web token and return it in the response */
				const token  = jwt.sign(JSON.stringify(payload), "your_jwt_secret");
				/** assign our jwt to the cookie */
				res.cookie('jwt', token, { maxAge: 900000 });
				res.json({ success: true, token: 'JWT ' + token });
			});
		}
	)(req, res, next);
});

export default router;