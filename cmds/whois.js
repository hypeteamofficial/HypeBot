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
  execute: async (log, message, args, client, db, packageInfo, Discord, member, badge) => {


    let user = message.mentions.users.first();
    let muser = message.guild.member(message.mentions.users.first());
    if (!muser) muser = message.member;
    if (!user) user = message.author;
    const d = Discord;
        const embed = new d.MessageEmbed()
        .addField("ID", `${user.id}`, true)
        .setColor(`${muser.displayHexColor}`)
        .setTimestamp()
        .setURL(`${user.avatarURL()}`)
        .addField("Currently", `${Presence[user.presence.status]}`, true)

        .addField(
          "Account Created:",
          `<t:${parseInt(user.createdTimestamp / 1000)}:R>`,
          true
        )
        .addField(
          "Account Joined Server:",
          `<t:${parseInt(muser.joinedTimestamp / 1000)}:R>`,
          true
        )

        .addField("Roles", `${muser.roles.cache.array()}`, true)
        .addField("Account Type:", `${bot[user.bot]}`, true);





    
      if (bowner.includes(message.author.id)) {
        embed.addField(
          "Joined Discord:",
          `<t:${parseInt(1528843292427 / 1000)}:R>`,
          true
        )
      }
      if (bowner.includes(message.author.id)) {
        embed.setFooter(`I am the owner of this bot!`)
      };


    
//    if (badge.includes(message.author.id)) {
//        embed.setAuthor(`${user.username}#${user.discriminator} ${badge[user.id]}`, user.avatarURL())
//      };
//    if (!badge.includes(message.author.id)) {
        embed.setAuthor(`${user.username}#${user.discriminator} `, user.avatarURL())
//      };


    
      message.channel.send({ embed });
      if (message.deletable) return message.delete();
    }
  };