const { SlashCommandBuilder } = require('discord.js');
const GUILD_ID = process.env.GUILD_ID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Testing The Things.'),
    async execute(interaction) {
       
        let guildMembers = await interaction.guild.members.fetch()

        await guildMembers.filter(member => member.guild.presences.status)


        
        console.log(guildMembers)

        await interaction.reply('test');
    },
};
