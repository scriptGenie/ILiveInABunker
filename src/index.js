const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
client.on('ready', (c) => {
    console.log(
        `Bot Started   - ${c.user.username}\nBot Tag       - ${c.user.tag}\n✅Spinning up chaos...`
    );
});

client.login(DISCORD_TOKEN);
