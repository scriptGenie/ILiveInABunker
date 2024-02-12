module.exports = {
    data: {
        name: 'example-link',
    },

    async execute(interaction, client) {
        await interaction.reply({
            content: 'https://www.example.com',
        });
    },
};
