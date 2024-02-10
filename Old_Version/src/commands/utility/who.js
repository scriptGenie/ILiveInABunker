const { SlashCommandBuilder } = require('discord.js');
const GUILD_ID = process.env.GUILD_ID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('who')
        .setDescription('Provides list of non-bot users.'),
    async execute(interaction) {
        let members = await interaction.guild.members.fetch();
        let commanders = [];

        for (let each of members) {

            if (!each[1].user.bot) {
                // console.log(each[1].user);

                if (each[1].user.globalName) {
                    commanders.push(each[1].user.globalName);
                    // console.log(each[1].user.globalName);
                } else if (
                    each[1].user.username &&
                    each[1].user.discriminator
                ) {
                    commanders.push(
                        `${each[1].user.username}#${each[1].user.discriminator}`
                    );
                    // console.log(each[1].user.globalName);
                } else {
                    commanders.push('Someone sneaks among us...');
                }
            }
        }

        // build reply string
        let replyString = '';
        commanders.forEach(each => {
            replyString += `${each}\n`
        });

        await interaction.reply(`**Humans:**` + `\n\n` + `${replyString}`);

    },
};
