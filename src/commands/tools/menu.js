const {
    SlashCommandBuilder,
    StringSelectMenuBuilder,
    ActionRowBuilder,
    StringSelectMenuOptionBuilder,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns a select menu.'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId('sub-menu')
            .setPlaceholder('Choose wisely.')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option #1')
                    .setValue('https://www.example.com'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Option #2')
                    .setValue('https://www.google.com')
            );

        await interaction.reply({
            content: 'Make your selection:',
            components: [new ActionRowBuilder().addComponents(menu)],
        });
    },
};
