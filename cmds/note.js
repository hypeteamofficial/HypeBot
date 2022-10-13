var bowner = '531186390717825074';
var notechannel ='953297219052781609';
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
  catagory: 'owner',
  name: 'note',
  desc: 'Says somthing in a embed!',
  aliases: ['addnote'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
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