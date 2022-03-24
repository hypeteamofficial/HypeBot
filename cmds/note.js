var bowner = '531186390717825074';
var notechannel ='953297219052781609';
module.exports = {
  catagory: 'owner',
  name: 'note',
  desc: 'Says somthing in a embed!',
  aliases: ['addnote'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
      if (!bowner.includes(message.author.id)) return message.reply('You do not have the power to do this');
    if (!args[0]) return message.reply('You need to imput a Message BOI');
    args = args.join(" ");
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(args)                
      .setColor(16295218);
    const m = await client.channels.cache.get(notechannel).send(embed)
    
    await m.react('746769836025315429');
    await m.react('746769836180373504');
  if (message.deletable) return message.delete();
}};