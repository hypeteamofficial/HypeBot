var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const request = require("request");
module.exports = {
  catagory: 'util',
  name: 'qrread',
  desc: 'A QR code reader!',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
      const image = message.attachments.first().url
  if (image !== undefined) {
    message.channel.startTyping();
    const imageURI = encodeURI(image);
    request({ uri: `https://api.qrserver.com/v1/read-qr-code/?fileurl=${imageURI}`, json: true }, (error, response, body) => {
      if (error) throw new Error(error);
      if (body[0].symbol[0].error === null) {
        message.channel.stopTyping();
        message.channel.send(`\`\`\`\n${body[0].symbol[0].data}\`\`\``);
      } else {
        message.channel.stopTyping();
        message.reply("there was an error while reading the QR code.");
      }
    });
  }
 if (message.deletable) return message.delete();
}};