const {
    SlashCommandBuilder,
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('Returns a modal.'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId('fav-color')
            .setTitle('Favorite Color');

        const textInput = new TextInputBuilder()
            .setCustomId('favColorInput')
            .setLabel('What is your favorite Color?')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const textInput2 = new TextInputBuilder()
            .setCustomId('secondInput')
            .setLabel('This is a secondary input.')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        modal.addComponents(
            new ActionRowBuilder().addComponents(textInput),
            new ActionRowBuilder().addComponents(textInput2)
        );

        await interaction.showModal(modal);
    },
};
