const request = require("request");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'fun',
  name: 'birbpic',
  desc: 'Get a random birb image!',
  aliases: ["birb", "birds", "birbs"],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
  message.channel.startTyping();
  request({ uri: "http://shibe.online/api/birds", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send({
      files: [{
        attachment: body[0],
        name: "bird.png"
      }]
    });
  });    
 if (message.deletable) return message.delete();
}};