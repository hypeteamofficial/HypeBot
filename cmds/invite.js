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
    .setTitle("INVITE ME!", '')
    .setDescription(`[Invite The Bot!](${links.botinv})\n[Join Support!](${links.supportinv})`);
  message.channel.send(embed)
if (message.deletable) return message.delete();
}};