var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
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
  level,  catagory: 'fun',
  name: 'emotes',
  desc: 'Get A List Of Emotes!',
  aliases: ['emojis'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    emojis = message.guild.emojis.cache
     var list = [];
    const emojilist = emojis.map(emoji =>  list.push(emoji))
    var i, j, temparray, chunk = 10;
    for (i = 0, j = list.length; i < j; i += chunk) {
      temparray = list.slice(i, i + chunk);
    message.channel.send(temparray)
    }
 if (message.deletable) return message.delete();
}};