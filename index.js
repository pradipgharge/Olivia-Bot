const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//runs whenever a message is created
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({ content: "Hi from bot!" });
});

client.login(
  "MTE5NTMzNTA3MTI3NjczMjQzNg.GTAh5p.l7ZECIBvLcGiHUEKqKsHld33l1PtZk0PsFiGDw"
);
