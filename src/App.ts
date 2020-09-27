import express from 'express';
import {apiRouterV1} from "./backend/api/v1";
import bodyParser from "body-parser";
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/2020Vanhacks', {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`mongoose connected to mongodb://localhost:27017/2020Vanhacks !`);
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/v1', apiRouterV1);

app.listen(port, ()=> console.log(`Example app listening on ${port}`));

