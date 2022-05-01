const fetch = require('node-superfetch');
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var numeral = require('numeral');
const request = require("request");

const child_process = require('child_process');



module.exports = {
  catagory: 'owner',
  name: 'eval',
  desc: 'eval',
  aliases: ['aliases'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);
    const clean = text => {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
    }
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      
            const embed = new Discord.MessageEmbed()
                .setTitle(`EVAL | SUCCESS`)
                .setDescription(`CODE:\n\`\`\`js\n${code}\n\`\`\``)
                .addField(`\`\`\`xl\n${evaled}\n\`\`\``)
                .setColor(16295218);
            return message.channel.send({embed });

    } catch (err) {
      
      log.error(err);
                  const embed = new Discord.MessageEmbed()
                .setTitle(`EVAL | ERROR`)
                .setDescription(`CODE:\n\`\`\`js\n${code}\n\`\`\``)
                .addField(`\`\`\`xl\n${clean(err)}\n\`\`\``)
                .setColor(16295218);
            return message.channel.send({embed });
    if (message.deletable) return message.delete();
  }
}};