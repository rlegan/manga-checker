import { model } from "mongoose";
import { MangaInterfaceDocument, MangaInterfaceModel } from "./MangaTypes";
import MangaSchema from "./MangaSchema";

export const MangaModel = model<MangaInterfaceDocument>(
  "manga",
  MangaSchema
) as MangaInterfaceModel;
