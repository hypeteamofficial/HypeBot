var ids = '531186390717825074';
const menu = require("d-reactor");
module.exports = {
  catagory: 'bot',
  name: 'help',
  desc: '(The one you just ran!) List of all commands!',
  aliases: ['?', 'cmds'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    const commands = client.commands;
    const data = [];
    if (args[0]) {
      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

      if (!command) {
        return message.reply('That\'s not a valid command!');
      }

      data.push(`**Name:** ${command.name}`);

      if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** -${command.name} ${command.usage}`);

      data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

      message.channel.send(data, { split: true })
    } else {
      const cArray = client.commands.array();
      data.push(commands.map(command => command.name));
      console.log(data + ' data')
      //Create the embeds
      const Discord = require('discord.js');
      const MessageEmbed = Discord.MessageEmbed;
      const ownerEmbed = new MessageEmbed()
        .setTitle('👑 Owner Commands!')
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🛠 Util commands!\n🔨 Mod commands!\n══════════════════════════');
      const mainEmbed = new MessageEmbed()
        .setTitle('🤖 Hypebot Help')
        .setDescription('🎉 Fun commands!\n🛠 Util commands!\n🔨 Mod commands!\n👑 Owner Commands!\n══════════════════════════');
      const funEmbed = new MessageEmbed()
        .setTitle('🎉 Fun commands!‎')
        .setDescription('🤖 Main commands!\n🛠 Util commands!\n🔨 Mod commands!\n👑 Owner Commands!\n══════════════════════════');
      const modEmbed = new MessageEmbed()
        .setTitle('🔨 Mod commands!')
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🛠 Util commands!\n👑 Owner Commands!\n══════════════════════════');
      const utilEmbed = new MessageEmbed()
        .setTitle('🛠 Util commands!')
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🔨 Mod commands!\n👑 Owner Commands!\n══════════════════════════');
      data.forEach(async cmdd => {
        cmdd.forEach(cmd => {
          var catagory = commands.get(cmd).catagory;
          var dsc = commands.get(cmd).desc;
          if (catagory === 'fun') { funEmbed.addField(cmd, dsc) }
          else if (catagory === 'mod') { modEmbed.addField(cmd, dsc) }
          else if (catagory === 'util') { utilEmbed.addField(cmd, dsc) }
          else if (catagory === 'owner') { ownerEmbed.addField(cmd, dsc) }
          else if (catagory === 'bot') { mainEmbed.addField(cmd, dsc) }
          else { mainEmbed.addField(cmd, dsc) }
        });
        const m = await message.channel.send(mainEmbed);
        menu.buttons(
          m,
          {
            emoji: "🤖",
            async clicked() {
              await m.edit(mainEmbed);
            }
          },
          {
            emoji: "🎉",
            async clicked() {
              await m.edit(funEmbed);
            }
          },
          {
            emoji: "🛠",
            async clicked() {
              await m.edit(utilEmbed);
            }
          },
          {
            emoji: "🔨",
            async clicked() {
              await m.edit(modEmbed);
            }
          },
          {
            emoji: "👑",
            async clicked() {
              if (!ids.includes(message.author.id)) return
              await m.edit(ownerEmbed);
            }
          },
          {
            emoji: "❌",
            async clicked(u, r) {
              await m.delete();
              const reply = await m.channel.send(`Help closed!`);
              reply.delete({ timeout: 5000 });
              r.cancel();
            }
          },
        );

      });
    }
  }

};
