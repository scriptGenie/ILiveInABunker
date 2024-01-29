const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban target user from server'),


    async execute(interaction) {
       
        // let guildMembers = await interaction.guild.members.fetch()


        await interaction.reply('test');
    },
};
