import { DISCORD_WEBHOOK } from "./constant";
import DiscordWebhook from "discord-webhook-ts";

export const sendMessage = async (
  mangaName: string,
  chapter: number,
  url: string
): Promise<void> => {
  const discordClient = new DiscordWebhook(DISCORD_WEBHOOK);
  await discordClient.modify({
    name: "MANGA CHECKER",
  });
  await discordClient.execute({
    embeds: [
      {
        title: ":bellhop: NEW MANGA OUT ! :bellhop:",
        description: `📖 ${mangaName} \n#️⃣ ${chapter}\n`,
        url,
        footer: {
          text: "created by @rlegan",
          icon_url:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        thumbnail: {
          url:
            "https://i.pinimg.com/originals/28/b1/aa/28b1aad26ba111e61aafd2a54630848e.jpg",
        },
      },
    ],
  });
};
