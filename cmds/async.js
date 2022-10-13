const fetch = require('node-superfetch');
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
var numeral = require('numeral');
const request = require("request");

const child_process = require('child_process');

// levels
const level = 4 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
const status = {
  0: "Disabled",
  1: "Enabled",
  2: "Testing",
  3: "Debug",
  4: "Developer Only",
}



module.exports = {
  catagory: 'owner',
  name: 'async',
  desc: 'eval',
  status,
  level,
  aliases: ['aeval'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member, scratchBOT, Scratch) => {

// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    
    const clean = text => {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
    }
    try {
      const code = args.join(" ");
      
      let evaled = eval("(async () => {" + code + "})()");
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