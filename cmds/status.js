var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
// levels
const level = 4 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
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
  catagory: 'owner',
  name: 'status',
  desc: 'Set the custom status',
  aliases: ['cst'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);
       const arg = args.join(" ");
       await db.set(`cst`, arg) 
       log.info(`Custom status is set to ${arg}!`)
    message.channel.send(`Custom status is set to ${arg}!`)
 if (message.deletable) return message.delete();
}};