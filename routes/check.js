import passport from "passport";
import { Router } from 'express';
const router = Router();

function auth(req, res, next) {
	passport.authenticate('jwt', { session: false }, (err, user) => {
		if (err) {
			next(new Error(err));
		}
		req.userPayload = userPayload;

		next();
	})(req, res);
}

router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	res.send();
});

// export {auth, router};
export default router;