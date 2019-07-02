import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
import knex from 'knex';

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

app.use(function (err, req, res, next) {
	res.status(500).send(err.stack);
});

export default app;
