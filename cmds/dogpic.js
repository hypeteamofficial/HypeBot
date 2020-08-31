const request = require("request");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'fun',
  name: 'dogpic',
  desc: 'Get a random dog image!',
  aliases: ['dog'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
   message.channel.startTyping();
  request({ uri: "https://dog.ceo/api/breeds/image/random", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send({
      files: [{
        attachment: body.message,
        name: "dog.png"
      }]
    });
  });
 if (message.deletable) return message.delete();
}};