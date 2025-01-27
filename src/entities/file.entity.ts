import { Schema, Document } from 'mongoose';
import { File } from "src/features/files/types/File";

export const FileSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: {type: String, required: true},
    url: {type: String, required: true},
    type: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
}, {
    timestamps: true
});

export interface IFileEntity extends Omit<File, '_id'>, Document {}