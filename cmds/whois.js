var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const Presence = {
    "online": "<:ONLINE:746539277005095023> | Online",
    "dnd": "<:DND:746539276623282187> | Do Not Disturb",
    "idle": "<:IDLE:746539277021610055> | Idle",
    "offline": "<:OFFLINE:746539276765757481> | Offline"
}
const bot = {
    "true": "<:BOT:746540840087978044> | BOT",
    "false": "<:MEMBERS:746505245240066080> | User",
}
module.exports = {
  catagory: 'util',
  name: 'whois',
  desc: 'Get Info About A Account',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
        let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
  if (!muser) muser = message.member;
  if (!user) user = message.author;
  const d = require('discord.js');
  const moment = require('moment'); 
  const embed = new d.MessageEmbed()
    .setAuthor(`${user.username}#${user.discriminator} `, user.avatarURL())
    .addField("ID", `${user.id}`, true)
    .setColor(16295218)
    .setTimestamp()
    .setURL(`${user.avatarURL()}`)
    .addField("Currently", `${Presence[muser.presence.status]}`, true)
    //.addField('Game', `${muser.presence.game === null ? "No Game" : muser.presence.game.name}`, true)
    .addField(
      "Account Created:",
      `${moment(user.createdAt)
        .toString()
        .substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`,
      true
    )
    .addField(
      "Account Joined Server:",
      `${moment(muser.joinedAt)
        .toString()
        .substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`,
      true
    )
    .addField("Roles", `${muser.roles.cache.array()}`, true)
    .addField("Account Type:", `${bot[user.bot]}`, true)
  message.channel.send({ embed });    
 if (message.deletable) return message.delete();
}};