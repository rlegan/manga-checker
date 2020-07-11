import axios, { AxiosResponse } from "axios";

const init = async () => {
  try {
    const req: AxiosResponse = await axios.get(
      "https://lelscan-vf.com/manga/one-piece/984",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36",
        },
      }
    );
    console.log(req.status);
  } catch (err) {
    console.log(err.response.status);
  }
};

init();
