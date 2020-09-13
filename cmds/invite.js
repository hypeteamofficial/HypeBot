var bowner = '531186390717825074';
const links = require('../links.json');
module.exports = {
  catagory: 'bot',
  name: 'invite',
  desc: 'Get The Bots Invite!',
  aliases: ['inv'],
  execute: async (message, args, client, db, packageInfo, Discord, member, mpembed) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(16295218)
    .setTitle("HYPE BOT", '')
    .setDescription(`HYPE BOT Is a Multipurpose bot for every server!`)
    .addField("INFO", "  PREFIX    | `//` OR `@BOT`\nHELP       | `//help` OR `@BOT help`\nOWNER | `Brandgrand!real#3131`", true)
    .addField("Links", `[Invite The Bot!](${links.botinv})\n[Join Support!](${links.supportinv})\n[Website!](https://bot.hypedev.ga/)\n[dsc.gg](https://dsc.gg/hypebot)`, true);
  message.channel.send(embed)
if (message.deletable) return message.delete();
}};