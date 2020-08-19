import { Schema } from "mongoose";
import { findOneOrCreate } from "./MangaStatic";

const MangaSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  chapter: {
    type: Number,
    default: true,
  },
  dateOfEntry: {
    type: Date,
    default: Date.now(),
  },
});

MangaSchema.statics.findOneOrCreate = findOneOrCreate;

export default MangaSchema;
