import express, { Express } from 'express';
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
import apiRouter from './routers/api';



const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', apiRouter)


app.listen(3000, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});