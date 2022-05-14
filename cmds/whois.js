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





    
      if (bowner.includes(user.id)) {
        embed.addField(
          "Joined Discord:",
          `<t:${parseInt(1528843292427 / 1000)}:R>`,
          true
        )
      };
      if (bowner.includes(user.id)) {
        embed.setFooter(`I am the owner of this bot!`)
      };


function isValidImageURL(str){
 if ( typeof str !== 'string' ) return false;
 return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp|webp)$/gi);
 }
  let pfplink = user.displayAvatarURL({format: "png"})
  if (isValidImageURL(pfplink)){
      embed.setURL(`${pfplink}`)
      embed.setAuthor(`${user.username}#${user.discriminator} `, pfplink)
    } else {
    embed.setAuthor(`${user.username}#${user.discriminator} `)
  }





      message.channel.send({ embed });
      if (message.deletable) return message.delete();
    }
  };



////////////
