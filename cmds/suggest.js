const customisation = require('../customisation.json');
module.exports = {
  catagory: 'bot',
  name: 'suggest',
  description: 'Suggests something.',
  usage: 'suggest <suggestion>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   if (!args[0]) return message.reply('You need to imput a Suggestion BOI');;
    if (args[0] === "bug") return message.reply("Please give a suggestion.");
    args = args.join(" ");
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle(`SUGGESTION`)
    .setDescription(args)                
    .setColor(16295218)
    .addField("FROM:", message.guild.name);

    message.reply("Thanks for suggesting that! <:CHECK:746502146056388609>");
    const content = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle(`SUGGESTION`)
    .setDescription(args)                
    .setColor(16295218)
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `INFO`)
    .addField("SERVER:", message.guild.name)
    .addField("MEMBER ID:", message.author.id)
    .addField("SERVER ID:", message.guild.id);
    client.channels.cache.get(customisation.suggestionlogchannelid).send(content);
    client.channels.cache.get(customisation.suggestionchannelid).send(embed)
 .then(async function (message) {
      await message.react(`746769836025315429`)
      await message.react(`746769836180373504`)
      });
  }
};