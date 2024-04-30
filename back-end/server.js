/*import express from 'express';
import path from 'path';
import newsRouter from './routes/news/news.js';
import queriesRouter from './routes/queries/queries.js';
import usersRouter from './routes/users/users.js';

const app = express();
const port = 4000;

app.use(express.json());

app.use('/news', newsRouter);
app.use('/queries', queriesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/

import express from "express";
import newsRouter from './routes/news/news.js';
import usersRouter from './routes/users/users.js';
import queriesRouter from './routes/queries/queries.js'

const app = express();
const port = process.env.PORT || 4000; 
console.log(port);

app.use(express.json());

app.use('/news', newsRouter);
app.use('/users', usersRouter);
app.use('/queries', queriesRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
