var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'owner',
  name: 'status',
  desc: 'Set the custom status',
  aliases: ['cst'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);
       const arg = args.join(" ");
       await db.set(`cst`, arg) 
       log.info(`Custom status is set to ${arg}!`)
    message.channel.send(`Custom status is set to ${arg}!`)
 if (message.deletable) return message.delete();
}};