var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'util',
  name: 'leave',
  desc: 'Simulates someone leaving',
execute: async (message, args, client, db, packageInfo, Discord, member) => {
let chx = await db.get(`byechannel_${message.guild.id}`);
 if (!client.channels.cache.get(chx).permissionsFor(message.author).has('SEND_MESSAGES') && !ids.includes(message.author.id)) return message.reply(mpmsg);
    let user = message.author;
 if (user) member = message.guild.member(user);
   client.emit('guildMemberRemove', member)
 if (message.deletable) return message.delete();
}};