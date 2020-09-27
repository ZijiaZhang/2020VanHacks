import {Document, Model, model, Schema} from "mongoose";

interface IArea{
    longitude: number;
    latitude: number;
    radius: number; // in Meters
    time: Date;
}


interface IAreaSchema extends Document, IArea {
}

interface IAreaModel extends Model<IAreaSchema> {
}

const areaSchema: Schema = new Schema({
    longitude: {type: Number, max: 180, min: -180},
    latitude: {type: Number, max: 90, min: -90},
    radius: Number, // in Meters
    time: Date
});


export const Area = model<IAreaSchema, IAreaModel>('area', areaSchema);
