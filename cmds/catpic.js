var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const request = require("request");
module.exports = {
  catagory: 'fun',
  name: 'catpic',
  desc: 'Get a random cat image!',
  aliases: ['cat'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
      message.channel.startTyping();
  request({
    url: "https://api.thecatapi.com/v1/images/search?format=json&mime_types=jpg,png",
    headers: {
      "x-api-key": `99c5a375-7d62-4087-be82-000b30f1a325`
    },
    json: true
  }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send({
      files: [{
        attachment: body[0].url,
        name: "cat.png"
      }]
    });
  });
 if (message.deletable) return message.delete();
}};