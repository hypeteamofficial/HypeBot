var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou are not my owner!`
module.exports = {
  catagory: 'owner',
  name: 'test',
  desc: 'description',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);
    let user = message.author;
 if (user) member = message.guild.member(user);
   client.emit('guildMemberAdd', member)
 if (message.deletable) return message.delete();
}};