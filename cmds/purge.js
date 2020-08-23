var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'mod',
  name: 'purge',
  desc: 'Delete Up To 100 Messages!',
  aliases: ['clean'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
      if (!message.member.hasPermission('MANAGE_MESSAGES') && !bowner.includes(message.author.id)) return message.reply(mpmsg);
      if (!message.deletable) return message.reply("I Can Not Delete Messages. :(")
    if (!message.mentions.users.size) {
msgs = args[0]    
      if (parseInt(args[0]) > 101 || parseInt(args[0]) === 101 || parseInt(args[0]) < 0) return message.reply('I Can Only Delete 1-100 Messages! :( ')
      const msgsd = 0
  message.delete();
 message.channel.bulkDelete(parseInt(args[0])).then(async res => {
const msgsd = res.size

const reply = await message.channel.send(`${message.author},` + " Deleted " + msgsd + ` Out of ` + msgs + " Messages!")
 reply.delete({ timeout: 5000 });

    })

    }
}};