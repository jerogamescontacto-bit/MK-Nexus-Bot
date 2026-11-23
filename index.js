const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} está conectado 24/7`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!hola") {
    message.reply("¡Hola! Soy MK Nexus 👑");
  }
});

client.login(process.env.DISCORD_TOKEN);
