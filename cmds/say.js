var bowner = '531186390717825074';
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
  catagory: 'fun',
  name: 'say',
  desc: 'Says somthing in a embed!',
  aliases: ['echo'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
 // levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    if (!args[0]) return message.reply('You need to imput a Message BOI');
    let user = message.author;
    args = args.join(" ");
      const embed = new Discord.MessageEmbed()
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
      message.channel.send(embed)
  if (message.deletable) return message.delete();
}};