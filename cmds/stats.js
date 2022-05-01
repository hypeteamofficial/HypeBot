
const fs = require('fs');
const info = require('../index.js');

const osutils = require('os-utils');
const version = require('../package.json')
const ver = info.version
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'bot',
  name: 'stats',
  desc: 'Get The Bots Stats!',
  aliases: ['botinfo'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
  var milliseconds = parseInt((client.uptime % 1000) / 100),
  seconds = parseInt((client.uptime / 1000) % 60),
  minutes = parseInt((client.uptime / (1000 * 60)) % 60),
  hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
  days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);
  days = (days < 10) ? "0" + days : days;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  fs.readdir('./cmds/', async (err, files) => {
    if (err) console.error(err);
    totcmds = files.length;
  
      osutils.cpuUsage(function(v) {
        const embed = new Discord.MessageEmbed()
        .setColor(16295218)
        .setAuthor(client.user.username, client.user.avatarURL())
        .setThumbnail(client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
        .setTimestamp()
        .addField("STATS", `VER ${ver}`)
        .addField("<:lstart:957351826368389200><:lend:957352075707187270>` Basic Stats `<:lstart:957351826368389200><:lend:957352075707187270>","\u200B")
        .addField("Global Prefix", "<@745786473554378832> | ``//``", true)
        .addField("Total Commands", `${totcmds} commands`, true)
        .addField("Total Servers", `${client.guilds.cache.size}`)
        .addField("<:CHANNEL:746502146073165855> Total Channels", `${client.channels.cache.size}`)
//        .addField("<:MEMBERS:746505245240066080> Total Users", `${client.users.cache.size}`)
        .addField("<:BOT:746540840087978044> Version", ver, true)
        .addField("Library", "Discord.js v12", true)
        .addField("<:OWNER:746502146232418374> Developer", `<@531186390717825074>`, true)
        .addField("<:lstart:957351826368389200><:lend:957352075707187270>` Server Stats `<:lstart:957351826368389200><:lend:957352075707187270>","\u200B")
        .addField("Platform", osutils.platform(),true)
        .addField("VPS CPU Cores", osutils.cpuCount() + " Cores",true)
        .addField("CPU Usage", `${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%`,true)
        .addField("Total Memory", osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
        .addField("RAM Usage Of VPS", `${(osutils.totalmem() - osutils.freemem()).toString().split(".")[0] + "." + ( osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[0] + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[1]}/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1]}MB`,true)
        .addField("RAM Usage Of Bot", (process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(2) + "MB/" + osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
        .addField("RAM Usage Of VPS %", `${(100 - osutils.freememPercentage() * 100).toString().split(".")[0] + "." + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split('')[0] + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split('')[1]}%`,true)
        .addField("Uptime", days + "d " + hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s", true)
        .setFooter(`HʏᴘᴇBᴏᴛ`);
        message.channel.send({embed});
      })
    })
  }
  
};
