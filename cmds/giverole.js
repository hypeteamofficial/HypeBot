var bowner = ['531186390717825074', '558045615511044115'];
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`

module.exports = {
  catagory: 'mod',
  name: 'giverole',
  desc: 'Give a user a role',
  aliases: ['addrole'],
  execute: async (log, message, args, client, db, packageInfo, Discord) => {
      if (!message.member.hasPermission('MANAGE_ROLES') && !bowner.includes(message.author.id)) return message.reply(mpmsg);

}};




