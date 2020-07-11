import { checkIfOut } from "./src/manga";

let mangas = {
  "one-piece": 985,
  "dr-stone": 158,
};

const checkAllMangas = async () => {
  for (let manga in mangas) {
    const chapter = mangas[manga];
    const res = await checkIfOut(manga, chapter);
    if (res) {
      mangas[manga] += 1;
    }
    console.log(res);
  }
};

const init = async () => {
  await checkAllMangas();
};

init();
