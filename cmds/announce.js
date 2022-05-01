const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var ids = '531186390717825074';
module.exports = {
  catagory: 'mod',
  name: 'announce',
  desc: 'announce something.',
  usage: 'announce <announcement>',
  execute: async (log, message, args, client, db, packageInfo, Discord) => {
 let chx = await db.get(`annchannel_${message.guild.id}`);
 if (!client.channels.cache.get(chx).permissionsFor(message.author).has('SEND_MESSAGES') && !ids.includes(message.author.id)) return message.reply(mpmsg);
   if (!args[0]) return message.reply('Please Imput A Announcement!');;
    args = args.join(" ");
      const embed = new Discord.MessageEmbed()
      .setTitle('ANNOUNCEMENT!')
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(args)                
      .setColor(16295218);
client.channels.cache.get(chx).send(embed)
if (message.deletable) return message.delete();
  }
};