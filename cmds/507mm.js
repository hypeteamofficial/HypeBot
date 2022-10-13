const urlMetadata = require('url-metadata')
const numeral = require('numeral');
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
  level,
  catagory: 'fun',
  name: '507mm',
  desc: 'description',
  aliases: ['aliases'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
       // levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
 
    
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
    log.error(error)
    
 if (message.deletable) return message.delete();
})}};