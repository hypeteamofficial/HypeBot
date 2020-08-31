const isgd = require("isgd");
const isURL = require("is-url");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'util',
  name: 'shortenurl',
  desc: 'A Url Shortener',
  aliases: ["urlshorten", "shortenlink", "urishorten", "shortenurl"],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
  message.channel.startTyping();
  if (args.length === 0) {
    message.channel.stopTyping();
    message.reply("you need to provide a URL to shorten!");
  } else {
    if (isURL(args[0])) {
      isgd.shorten(args[0], (res) => {
        message.channel.stopTyping();
        message.channel.send(res);
      });
    } else {
      message.channel.stopTyping();
      message.reply("you need to provide a URL to shorten!");
    }
  }    
 if (message.deletable) return message.delete();
}};