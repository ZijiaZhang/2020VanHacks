import express from 'express'
import {Area} from "../../models/areas";

export const areasRouter = express.Router();

areasRouter.put('/', (req, res, next) => {
    console.log(req.body);
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const radius = req.body.radius;
    const time = req.body.time;
    Area.create({longitude, latitude, radius, time: time? time:Date.now()}).then(
        () =>  res.json({message: "added"})
    ).catch( () => res.status(500).json({message: 'error when adding area'}));
});


areasRouter.put('/batch', (req, res, next) => {
    const areas = req.body.areas;
    let addition = [];
    for (let area of areas) {
        const longitude = area.longitude;
        const latitude = area.latitude;
        const radius = area.radius;
        const time = area.time;
        addition.push(Area.create({longitude, latitude, radius, time: time? time: Date.now()}));
    }
    Promise.all(addition).then(() => {res.json({message: "all added"})})
        .catch(() => res.status(500).json("Message Error when adding ome of the entries"))
});


areasRouter.get('/', (req, res, next) => {
    console.log("getting");
    Area.find({}).then(
        (areas) =>  res.json({areas})
    ).catch( () => res.status(500).json({message: 'error when getting area'}));
});
