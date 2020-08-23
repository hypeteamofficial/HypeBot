var bowner = '531186390717825074';
module.exports = {
  catagory: 'bot',
  name: 'ping',
  desc: 'Pong!',
  aliases: ['aliases'],
  execute: async (message, args, client, db, packageInfo, Discord, member, mpembed) => {
     var milliseconds = parseInt((client.uptime % 1000) / 100),
  seconds = parseInt((client.uptime / 1000) % 60),
  minutes = parseInt((client.uptime / (1000 * 60)) % 60),
  hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
  days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);
  days = (days < 10) ? "0" + days : days;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
    if (!message.member.hasPermission('PERMS')) return message.reply(mpembed);
      const ping = await message.channel.send('Sending the Boops and the Beeps!');     
    ping.edit(new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setColor(16295218)
      .addField('Latency', ping.createdTimestamp - message.createdTimestamp + 'ms')
      .addField('API Latency', Math.round(client.ws.ping) + 'ms')
      .addField("Uptime", days + "d " + hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s"));
if (message.deletable) return message.delete();
}};