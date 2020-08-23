var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'owner',
  name: 'eval',
  desc: 'eval',
  aliases: ['aliases'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
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

      message.channel.send(new Discord.MessageEmbed().setTitle('EVAL').setDescription('```x1\n' + clean(evaled) + '```'), { code: "xl", split: "true" });
    } catch (err) {
      console.error(err);
      message.channel.send(new Discord.MessageEmbed().setTitle('ERROR').setDescription(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``));
    }
    if (message.deletable) return message.delete();
  }
};