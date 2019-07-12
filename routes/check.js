import passport from "passport";
import { Router } from 'express';
const router = Router();

function auth(req, res, next) {
	passport.authenticate('jwt', { session: false }, (err, userPayload) => {
		if (err) {
			err = new Error(err);
			err.status = 404;
			return next(err);
		}
		req.userPayload = userPayload;
		return next();
	})(req, res);
}

router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	res.send({});
});

export {auth, router};