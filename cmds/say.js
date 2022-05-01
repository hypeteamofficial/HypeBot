var bowner = '531186390717825074';
module.exports = {
  catagory: 'fun',
  name: 'say',
  desc: 'Says somthing in a embed!',
  aliases: ['echo'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
    if (!args[0]) return message.reply('You need to imput a Message BOI');
    args = args.join(" ");
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(args)                
      .setColor(16295218);
      message.channel.send(embed)
  if (message.deletable) return message.delete();
}};