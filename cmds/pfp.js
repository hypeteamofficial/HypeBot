var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'fun',
  name: 'pfp',
  desc: '*Steal* someones avatar!',
  aliases: ['avatar'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
     if (args.length === 0) {
    message.channel.send(message.author.displayAvatarURL({size: 1024, format: "png"}));
  } else if (message.mentions.users.first() !== undefined) {
    message.channel.send(message.mentions.users.first().displayAvatarURL({size: 1024, format: "png"}));
  } else {
    message.channel.send(message.author.displayAvatarURL({size: 1024, format: "png"}));
  }
 if (message.deletable) return message.delete();
}};