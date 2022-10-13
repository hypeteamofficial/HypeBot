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
  catagory: 'fun',
  name: 'pfp',
  desc: '*Steal* someones avatar!',
  aliases: ['avatar'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
     if (args.length === 0) {
    message.channel.send(message.author.displayAvatarURL({size: 1024, format: "png"}));
  } else if (message.mentions.users.first() !== undefined) {
    message.channel.send(message.mentions.users.first().displayAvatarURL({size: 1024, format: "png"}));
  } else {
    message.channel.send(message.author.displayAvatarURL({size: 1024, format: "png"}));
  }
 if (message.deletable) return message.delete();
}};