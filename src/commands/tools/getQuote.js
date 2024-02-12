const { SlashCommandBuilder } = require('discord.js');
const quotes = require('../../misc/quotes.js');

function getRandomIndex() {
    return Math.floor(Math.random() * (quotes.quotes.length));
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Returns random quote.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `${quotes.quotes[getRandomIndex()]}`;
        await interaction.editReply({
            content: newMessage,
        });
    },
};
