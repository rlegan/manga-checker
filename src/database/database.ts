import * as Mongoose from "mongoose";
import { MangaModel } from "./mangas/MangaModel";

let database: Mongoose.Connection;
export const connect = () => {
  const uri =
    "mongodb://mangauser:6fwtqeOm5yXDlOxU@manga-shard-00-00.or6cu.mongodb.net:27017,manga-shard-00-01.or6cu.mongodb.net:27017,manga-shard-00-02.or6cu.mongodb.net:27017/manga?ssl=true&replicaSet=atlas-g7vhb4-shard-0&authSource=admin&retryWrites=true&w=majority";

  Mongoose.connect(uri, {
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
