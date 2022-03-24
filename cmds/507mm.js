const urlMetadata = require('url-metadata')
const numeral = require('numeral');
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'fun',
  name: '507mm',
  desc: 'description',
  aliases: ['aliases'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
const embed = new Discord.MessageEmbed();
      
message.channel.startTyping();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
var rrn = getRandomArbitrary(1, 507)
var frn = numeral(rrn).format('000'); 

var img = "http://507movements.com/img/mm_" + frn + '.png'
var url = "http://507movements.com/mm_" + frn + '.html'

    urlMetadata(url).then(
  function (metadata) { // success handler
    embed.setTitle(`${metadata.description}`);
    embed.setURL(`${metadata.url}`);
    embed.setColor(16295218);
    embed.setImage(img);
    message.channel.send(embed);
    message.channel.stopTyping();

  },
  function (error) { // failure handler
    console.log(error)
    
 if (message.deletable) return message.delete();
})}};