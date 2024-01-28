let badID = '1201070468921315429';

const { REST, Routes } = require('discord.js');
require('dotenv').config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const rest = new REST().setToken(DISCORD_TOKEN);

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(CLIENT_ID, GUILD_ID, badID))
    .then(() => console.log('Successfully deleted guild command'))
    .catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(CLIENT_ID, badID))
    .then(() => console.log('Successfully deleted application command'))
    .catch(console.error);
