import * as dotenv from "dotenv";
dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_WEBHOOK: string;
      MONGO_URI: string;
    }
  }
}

export const { DISCORD_WEBHOOK, MONGO_URI } = process.env;
