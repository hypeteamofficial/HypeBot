var bowner = '531186390717825074';
module.exports = {
  catagory: 'fun',
  name: 'say',
  desc: 'Says somthing in a embed!',
  aliases: ['echo'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
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