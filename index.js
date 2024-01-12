const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config");
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

// Use config.token wherever you need your bot token
const token = config.token;

client.login(token);
