import { Document, Model } from "mongoose";

export interface MangaInterface {
  displayName: string;
  name: string;
  chapter: number;
}

export interface MangaInterfaceDocument extends MangaInterface, Document {}

export interface MangaInterfaceModel extends Model<MangaInterfaceDocument> {
  findOneOrCreate: (
    this: MangaInterfaceModel,
    {
      displayName,
      name,
      chapter,
    }: { displayName: string; name: string; chapter: number }
  ) => Promise<MangaInterfaceDocument>;
}
