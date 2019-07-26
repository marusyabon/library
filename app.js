import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import booksRouter from './routes/books';
import {router as checkRouter} from './routes/check';
import registerRouter from './routes/register';
import loginRouter from './routes/login';
import logoutRouter from './routes/logout';
import likesRouter from './routes/likes';
import filesRouter from './routes/files';
import fileUpload from 'express-fileupload';
import './config/passport';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());	
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload());
 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/check', checkRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/likes', likesRouter);
app.use('/files', filesRouter);

app.use(function (err, req, res, next) {
	if (!err.statusCode) err.statusCode = 500;

	if (err.shouldRedirect) {
		console.log(err);
	} else {
		console.log(err);
		// res.status(err.statusCode).send(err.message);
	}
});

export default app;