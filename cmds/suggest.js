const customisation = require('../customisation.json');
var ids = '531186390717825074';
const reactor = require("d-reactor");
module.exports = {
  catagory: 'bot',
  name: 'suggest',
  desc: 'Suggests something to **HYPE DEVELOPMENT**!',
  usage: 'suggest <suggestion>',
  execute: async (log, message, args, client, db, packageInfo, Discord) => {
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