var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'mod',
  name: 'lockdown',
  desc: 'Lock A Channel',
  aliases: ['ld'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    if (!message.member.hasPermission('MUTE_MEMBERS') && !bowner.includes(message.author.id)) return message.reply(mpmsg);
  if (args[0] === `start`) {
const embed = new Discord.MessageEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔒CHANNEL LOCKED!")
    .setDescription(`This Channel has been lock by ${message.author.username}!`);
    message.channel.createOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false})
    message.channel.send(embed)
  }
  else if (args[0] === `end`) {
const embed = new Discord.MessageEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔓 CHANNEL UNLOCK!")
    .setDescription("This channel is now unlock! :)");
    message.channel.createOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null})
    message.channel.send(embed)
  }
 if (message.deletable) return message.delete();
}};