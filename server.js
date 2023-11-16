const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const apiRouter = require('./routers/api');
const errorMiddleware = require('./middlewares/errors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', apiRouter)


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});