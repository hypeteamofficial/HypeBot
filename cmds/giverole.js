var bowner = ['531186390717825074', '558045615511044115'];
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`

// levels
const level = 3 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
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
  name: 'giverole',
  desc: 'Give a user a role',
  aliases: ['addrole'],
  execute: async (log, message, args, client, db, packageInfo, Discord) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
      if (!message.member.hasPermission('MANAGE_ROLES') && !bowner.includes(message.author.id)) return message.reply(mpmsg);

}};




