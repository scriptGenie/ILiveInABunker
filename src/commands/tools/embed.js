const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('This an embed.')
            .setURL('https://www.furcadia.com')
            .setDescription('This is a description of an embed')
            .setColor(0x610da1)
            //.setImage(client.user.displayAvatarURL())
            // .setThumbnail(client.user.displayAvatarURL())
            // .setTimestamp(Date.now())
            .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag,
            })
            // .setFooter({
            //     iconURL: client.user.displayAvatarURL(),
            //     text: client.user.tag,
            // })

            .addFields([
                {
                    name: ` `,
                    value: `[TEST_LINK](https://www.example.com)`,
                    inline: true,
                },
                {
                    name: 'Field 2',
                    value: 'Field Value 2',
                    inline: true,
                },
                {
                    name: 'Field 3',
                    value: 'Field Value 3',
                    inline: true,
                },
            ]);

        await interaction.reply({
            embeds: [embed],
        });
    },
};
