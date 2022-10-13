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
  catagory: 'mod',
  name: 'purge',
  desc: 'Delete Up To 100 (younger then 2 weeks) Messages!',
  aliases: ['clean'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
      if (!message.member.hasPermission('MANAGE_MESSAGES') && !bowner.includes(message.author.id)) return message.reply(mpmsg);
      if (!message.deletable) return message.reply("I Can Not Delete Messages. :(")
      await message.delete();
      

    if (!message.mentions.users.size) {
msgs = args[0]    
      if (parseInt(args[0]) > 101 || parseInt(args[0]) === 101 || parseInt(args[0]) < 0) return message.reply('I Can Only Delete 1-100 Messages! :( ')
      const msgsd = 0
 message.channel.bulkDelete(parseInt(args[0]), true).then(async res => {
const msgsd = res.size

const reply = await message.channel.send(`${message.author},` + " Deleted " + msgsd + ` Out of ` + msgs + " Messages!")
 reply.delete({ timeout: 5000 });

    })

    }
}};