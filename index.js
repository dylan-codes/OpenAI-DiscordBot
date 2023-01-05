// Create a Discord Bot using OpenAI API that interacts on the Discord Server
require("dotenv").config();

//Configure Discord
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Prepare connection to OpenAI
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

client.on("messageCreate", async function (message) { // Watches messages in Discord server the bot is a part of
  try {
    if (message.author.bot) return; // If the message author is the bot do not continue

    const gptResponse = await openai.createCompletion({
      model: "text-davinci-003", // Model being used
      prompt: `DiscordBot is a friendly chat bot.\n\ 
                ${message.author.username}: ${message.content}\n\
                DiscordBot: `, // Prompt is what will be fed to the AI model. First sentence is a primer. Feel free to change the DiscordBot's name and personality (ex: GoblinBot is an evil little Goblin)
      temperature: 1, // Randomness (0 being most to the point and 1 being more creative)
      max_tokens: 100, // Amount of words allowed in the response
      stop: ["DiscordBot:"], // Stop when it's name is referenced again.
    });

    message.reply(`${gptResponse.data.choices[0].text}`);

    return;
  } catch (err) {
    console.log(err);
  }
});

// Log bot in
client.login(process.env.DISCORD_TOKEN);
console.log("DiscordBot is now online."); // After typing node ./index.js this will signify it coming online
