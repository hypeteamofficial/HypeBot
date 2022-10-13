var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
// levels
const level = 1 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
const status = {
  0: "Disabled",
  1: "Enabled",
  2: "Testing",
  3: "Debug",
  4: "Developer Only",
}

module.exports = {
  status,
  level,
  catagory: 'mod',
  name: 'lockdown',
  desc: 'Lock A Channel',
  aliases: ['ld'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
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