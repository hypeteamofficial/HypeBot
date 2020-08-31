var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou are not my owner!`
const mpmsgp = `YOU DONT HAVE PREMIUM`
module.exports = {
  catagory: 'owner',
  name: 'test',
  desc: 'description',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);

   if (message.member.roles.has(`746032875799052334`)) {
db.set(`haspremium_${message.author.id}`, true);
    } else {
 message.channel.send(`YOU DO NOT HAVE <@746032875799052334>!`)
    }
 if (message.deletable) return message.delete();
}};