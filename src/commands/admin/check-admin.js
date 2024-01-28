const { SlashCommandBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('check-admin')
        .setDescription('Checks if the user has admin privileges.'),
    async execute(interaction) {
        // if user is not admin
        if (
            !interaction.member
                .permissionsIn(interaction.channel)
                .has(PermissionsBitField.Flags.Administrator)
        ) {
            await interaction.reply(
                'You must be an administrator to perform this action.'
            );
            return;
        } else {
            await interaction.reply('Of course I recognize our creator!');
            return;
        }
    },
};
