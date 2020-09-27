import express from 'express'
import {Area} from "../../models/areas";

export const areasRouter = express.Router();

areasRouter.put('/', (req, res, next) => {
    console.log(req.body);
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const radius = req.body.radius;
    Area.create({longitude, latitude, radius, time: Date.now()}).then(
        () =>  res.json({message: "added"})
    ).catch( () => res.status(500).json({message: 'error when adding area'}));
});

areasRouter.get('/', (req, res, next) => {
    console.log("getting");
    Area.find({}).then(
        (areas) =>  res.json({areas})
    ).catch( () => res.status(500).json({message: 'error when getting area'}));
});
