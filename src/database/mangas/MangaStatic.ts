import {
  MangaInterfaceDocument,
  MangaInterfaceModel,
  MangaInterface,
} from "./MangaTypes";

export async function findOneOrCreate(
  this: MangaInterfaceModel,
  manga: MangaInterface
): Promise<MangaInterfaceDocument> {
  const record = await this.findOne({ name: manga.name });

  if (record) {
    return record;
  }
  return this.create(manga);
}
