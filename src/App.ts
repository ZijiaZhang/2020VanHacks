import express from 'express';
import {apiRouterV1} from "./backend/api/v1";
import * as mongoose from "mongoose";


const app = express();

mongoose.connect('mongodb://localhost:27017/2020Vanhacks', {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`mongoose connected to mongodb://localhost:27017/2020Vanhacks !`);
});

app.use('/v1', apiRouterV1);

app.listen(3000, ()=> console.log(`Example app listening on 3000`));

