var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'fun',
  name: 'emotes',
  desc: 'Get A List Of Emotes!',
  aliases: ['emojis'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    emojis = message.guild.emojis.cache
     var list = [];
    const emojilist = emojis.map(emoji =>  list.push(emoji))
    console.log(emojilist)
    var i, j, temparray, chunk = 10;
    for (i = 0, j = list.length; i < j; i += chunk) {
      temparray = list.slice(i, i + chunk);
    message.channel.send(temparray)
    }
 if (message.deletable) return message.delete();
}};