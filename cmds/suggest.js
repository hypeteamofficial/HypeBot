const customisation = require('../customisation.json');
var ids = '531186390717825074';
const reactor = require("d-reactor");
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
  catagory: 'bot',
  name: 'suggest',
  desc: 'Suggests something to **HYPE DEVELOPMENT**!',
  usage: 'suggest <suggestion>',
  execute: async (log, message, args, client, db, packageInfo, Discord) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
   if (!args[0]) return message.reply('You need to imput a Suggestion BOI');;
    if (args[0] === "bug") return message.reply("Please give a suggestion.");
    args = args.join(" ");
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle(`SUGGESTION`)
    .setDescription(args)                
    .setColor(16295218)
    .addField("FROM:", message.guild.name);
    const votes = 0
    message.reply("Thanks for suggesting that! <:CHECK:746502146056388609>");
    const content = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle(`SUGGESTION`)
    .setDescription(args)                
    .setColor(16295218)
    .addField("<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>", `INFO`)
    .addField("SERVER:", message.guild.name)
    .addField("MEMBER ID:", message.author.id)
    .addField("SERVER ID:", message.guild.id)
    
    const suggestionlog = await client.channels.cache.get(customisation.suggestionlogchannelid).send(content);
    const suggestion = await client.channels.cache.get(customisation.suggestionchannelid).send(embed)
    reactor.buttons(
         suggestion,
         {
            emoji: "❌",
            async clicked(u, r) {
              if (!ids.includes(message.author.id)) return
               await suggestion.delete();
               await suggestionlog.delete();
               r.cancel();
            }
         }, 
    );
}};