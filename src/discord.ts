import { DISCORD_WEBHOOK } from "./constant";
import DiscordWebhook from "discord-webhook-ts";

export const sendMessage = async (message: string): Promise<void> => {
  const discordClient = new DiscordWebhook(DISCORD_WEBHOOK);
  discordClient.execute({ content: message });
};
