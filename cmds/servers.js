var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou are not my owner!`
const ReactionMenu = require('../ReactionMenu.js');
module.exports = {
  catagory: 'owner',
  name: 'servers',
  desc: 'Get a list of servers the bots in!',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);
       const servers = message.client.guilds.cache.array().map(guild => {
      return `\`${guild.id}\` - **${guild.name}** - \`${guild.members.cache.size}\` members`;
    });

    const embed = new Discord.MessageEmbed()
      .setTitle('Server List')
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);

    if (servers.length <= 10) {
      const range = (servers.length == 1) ? '[1]' : `[1 - ${servers.length}]`;
      message.channel.send(embed.setTitle(`Server List ${range}`).setDescription(servers.join('\n')));
    } else {
      new ReactionMenu(client, message.channel, message.member, embed, servers);
    }
 if (message.deletable) return message.delete();
}};