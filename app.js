import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import {router as checkRouter} from './routes/check';
import loginRouter from './routes/login';
import './config/passport';
import knex from 'knex';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());	
app.use(express.static(path.join(__dirname, 'public')));

const db = knex({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: '7258768',
		database: 'library'
	}
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/check', checkRouter);
app.use('/login', loginRouter);

app.use(function (err, req, res, next) {
	if (!err.statusCode) err.statusCode = 500;

	if (err.shouldRedirect) {
		console.log(err);
	} else {
		console.log(err);
		// res.status(err.statusCode).send(err.message);
	}
});

export {db, app};