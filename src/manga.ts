import axios, { AxiosResponse } from "axios";
import { sendMessage } from "./discord";
import { MangaInterfaceDocument, MangaInterfaceModel } from "./database/mangas";

export const checkIfOut = async (
  manga: string,
  chapter: number
): Promise<boolean> => {
  try {
    const req: AxiosResponse = await axios.get(
      `https://lelscan-vf.com/manga/${manga}/${chapter}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36",
        },
      }
    );
    if (req.status) {
      console.log(`${manga} : #${chapter} is out !`);
    }
    return true;
  } catch (err) {
    console.log(`${manga} : #${chapter} not out yet :(`);
    return false;
  }
};

export const checkAllMangas = async (db: MangaInterfaceModel) => {
  const allMangas = (await db.find()) as MangaInterfaceDocument[];
  allMangas.forEach(async (manga: MangaInterfaceDocument) => {
    const chapter = manga.chapter;
    const isOut = await checkIfOut(manga.name, chapter);
    if (isOut) {
      await sendMessage(
        `${manga.displayName} : Chapter #${manga.chapter} is out ! : https://lelscan-vf.com/manga/${manga.name}/${manga.chapter}`
      );
      await mangaIsOut(db, manga._id);
    }
  });
};

const mangaIsOut = async (db: MangaInterfaceModel, mangaId: any) => {
  const mang = await db.findById(mangaId);
  mang!.chapter += 1;
  mang!.save();
};
