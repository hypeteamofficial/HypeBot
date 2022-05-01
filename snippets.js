// Delete The Trigger
if (message.deletable) return message.delete();

// Owner only command
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou are not my owner!`
module.exports = {
  catagory: 'owner',
  name: 'NAME',
  desc: 'description',
  aliases: ['aliases'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);

 if (message.deletable) return message.delete();
}};

// LOG styles  silly verbose info data help warn debug error server