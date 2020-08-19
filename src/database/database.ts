import * as Mongoose from "mongoose";
import { MangaModel } from "./mangas/MangaModel";
import { MONGO_URI } from "../constant";

let database: Mongoose.Connection;
export const connect = () => {
  Mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });

  return MangaModel;
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
