const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var bowner = '531186390717825074';
module.exports = {
  catagory: 'mod',
  name: 'kick',
  desc: 'Kick Someone',
  execute: async (message, args, client, db, packageInfo, Discord, member, mpembed) => {
if (!message.member.hasPermission('KICK_MEMBERS') && !bowner.includes(message.author.id)) return message.reply(mpmsg);
      if (!message.guild) return;
      const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Kicked Using Hype Bot!')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}!\nHe Can Join Again If He Wants.`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member?');
            log.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
if (message.deletable) return message.delete();
}};