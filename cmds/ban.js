  const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var bowner = '531186390717825074';
module.exports = {
  catagory: 'mod',
  name: 'ban',
  desc: 'Ban Someone!',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    if (!message.member.hasPermission('BAN_MEMBERS') && !bowner.includes(message.author.id)) return message.reply(mpmsg);
      if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Banned!',
          })
          .then(() => {
            message.reply(`I Have Banned ${user.tag}!`);
          })
          .catch(err => {
            message.reply('I Faild To Ban That User!');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this server!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  
if (message.deletable) return message.delete();
}};