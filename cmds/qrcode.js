const qrcode = require("qrcode");
const tempy = require("tempy");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'util',
  name: 'qrcode',
  desc: 'Make A QR Code!',
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
    const qrOutput = tempy.file({ extension: "png" });
  message.channel.startTyping();
  if (args.length > 0) {
    qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
      if (error) throw new Error(error);
      message.channel.stopTyping();
      message.channel.send({
        files: [{
          attachment: qrOutput,
          name: `YOURQR.png`
        }]
      });
    });
  } else {
    message.channel.stopTyping();
    message.reply("you need to provide some text to generate a QR code!");
  }
    
 if (message.deletable) return message.delete();
}};