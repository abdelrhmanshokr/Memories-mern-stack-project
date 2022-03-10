// the starting point of the server side code 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRouter from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/api/posts', postRouter);

const CONNECTION_URL = "mongodb+srv://shokr:password1234@memories-project-cluste.gk3jd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

// database connection 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`Server connected to port: ${port}`);
        });
    })
    .catch(err => {
        console.log(err.message);
    });