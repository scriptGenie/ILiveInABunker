module.exports = {
    data: {
        name: 'fav-color',
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `You selected: ${interaction.fields.getTextInputValue(
                'favColorInput'
            )} and ${interaction.fields.getTextInputValue('secondInput')}`,
        });
    },
};
