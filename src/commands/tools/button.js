const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Create button.'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('example-link')
            .setLabel(`Click Me`)
            .setStyle(ButtonStyle.Primary);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)],
        });
    },
};
