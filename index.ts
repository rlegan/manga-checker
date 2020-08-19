import { checkAllMangas } from "./src/manga";
import { connect } from "./src/database/database";

const delay = (s: number) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const init = async () => {
  const db = connect();
  while (true) {
    await checkAllMangas(db);
    await delay(randomIntFromInterval(900, 2700));
  }
};

init();
