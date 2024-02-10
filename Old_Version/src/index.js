const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, IntentsBitField, PermissionsBitField } = require('discord.js');
require('dotenv').config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    permissions: [
        PermissionsBitField.Flags.Administrator,
    ]
});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
            );
        }
    }
}

client.on('ready', (c) => {
    console.log(
        `Bot Started   - ${c.user.username}\nBot Tag       - ${c.user.tag}\n✅Spinning up chaos...`
    );
});

client.on('messageCreate', (message) => {
    // console.log(message);

    if (!message.author.bot) {
        message
            .reply(`Did you really just say "${message.content}"`)
            .then(() => {
                console.log(
                    `Replied to message ${message.author.globalName}\n${message.content}`
                );
                console.log();
            });
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(
            `No command matching ${interaction.commandName} was found.`
        );

        interaction.reply(`Invalid Command: ${interaction.commandName}`)
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        }
    }
});

client.login(DISCORD_TOKEN);
