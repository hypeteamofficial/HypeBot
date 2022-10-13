const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var ids = '531186390717825074';
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
  name: 'announce',
  desc: 'announce something.',
  status: 'enabled', // disabled | owneronly | debug | testing
  usage: 'announce <announcement>',
  execute: async (log, message, args, client, db, packageInfo, Discord) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    
 let chx = await db.get(`annchannel_${message.guild.id}`);
 if (!client.channels.cache.get(chx).permissionsFor(message.author).has('SEND_MESSAGES') && !ids.includes(message.author.id)) return message.reply(mpmsg);
        let user = message.author;
   if (!args[0]) return message.reply('Please Imput A Announcement!');;
    args = args.join(" ");
      const embed = new Discord.MessageEmbed()
      .setTitle('ANNOUNCEMENT!')
      .setDescription(args)                
      .setColor(16295218);

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
client.channels.cache.get(chx).send(embed)
if (message.deletable) return message.delete();
  }
};