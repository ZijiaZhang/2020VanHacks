import express from 'express';
import {areasRouter} from "./addLocation";

export const apiRouterV1 = express.Router();

apiRouterV1.use('/areas', areasRouter);

apiRouterV1.use('/healthcheck', (req, res) => {res.json({message: "ok"})});