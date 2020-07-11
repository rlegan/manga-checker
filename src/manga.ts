import axios, { AxiosResponse } from "axios";

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
