var bowner = '531186390717825074';
const menu = require("d-reactor");
// levels
const level = 1 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
const stext = {
  0: "Disabled",
  1: "Enabled",
  2: "Testing",
  3: "Debug",
  4: "Developer Only",
}
const semote = {
  0: "<:Disabled:992541962802573362>",
  1: "<:Enabled:992541963721117696>",
  2: "<:Beta:992541966531317760>",
  3: "<:Debug:992541964664832202>",
  4: "<:DeveloperOnly:992541965583401050>",
}
const status = `${semote[level]} ${stext[level]}`

module.exports = {
  status,
  level,
  catagory: 'bot',
  name: 'help',
  desc: '(The one you just ran!) List of all commands!',
  aliases: ['?', 'cmds'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");

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

      //Create the embeds
      const Discord = require('discord.js');
      const MessageEmbed = Discord.MessageEmbed;
      const ownerEmbed = new MessageEmbed()
        .setTitle('👑 Owner Commands!')
        .setColor(16295218)
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🔥 Reddit Commands!\n🛠 Util commands!\n🔨 Mod commands!\n<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>')
        .setFooter('This menu will self distruct after 15 minutes after opening.');
      const mainEmbed = new MessageEmbed()
        .setTitle('Main commands!')
        .setColor(16295218)
        .setDescription('🎉 Fun commands!\n🔥 Reddit Commands!\n🛠 Util commands!\n🔨 Mod commands!\n<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>')
        .setFooter('This menu will self distruct after 15 minutes after opening.');
      const funEmbed = new MessageEmbed()
        .setTitle('🎉 Fun commands!‎')
        .setColor(16295218)
        .setDescription('🤖 Main commands!\n🔥 Reddit Commands!\n🛠 Util commands!\n🔨 Mod commands!\n<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>')
        .setFooter('This menu will self distruct after 15 minutes after opening.');
      const redditEmbed = new MessageEmbed()
        .setTitle('🔥 Reddit commands!‎')
        .setColor(16295218)
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🛠 Util commands!\n🔨 Mod commands!\n<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>')
        .setFooter('This menu will self distruct after 15 minutes after opening.');
      const modEmbed = new MessageEmbed()
        .setTitle('🔨 Mod commands!')
        .setColor(16295218)
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🔥 Reddit Commands!\n🛠 Util commands!\n<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>')
        .setFooter('This menu will self distruct after 15 minutes after opening.');
      const utilEmbed = new MessageEmbed()
        .setTitle('🛠 Util commands!')
        .setColor(16295218)
        .setDescription('🤖 Main commands!\n🎉 Fun commands!\n🔥 Reddit Commands!\n🔨 Mod commands!\n<:lend:957352075707187270><:lmid:957352039334162534><:lstart:957351826368389200>')
        .setFooter('This menu will self distruct after 15 minutes after opening.');
      const CLOSED = new MessageEmbed()
        .setTitle('❌ CLOSED ❌')
        .setColor(16295218)
        .setDescription('This command menu has been closed.')
        .setFooter('This menu will self distruct after 15 seconds.');
      data.forEach(async cmdd => {
        cmdd.forEach(cmd => {
          var catagory = commands.get(cmd).catagory;
          var dsc = commands.get(cmd).desc;
          var level = commands.get(cmd).level;
          var title = `${cmd}  ${semote[level]}`
          if (catagory === 'fun') { funEmbed.addField(title, dsc) }
          else if (catagory === 'mod') { modEmbed.addField(title, dsc) }
          else if (catagory === 'util') { utilEmbed.addField(title, dsc) }
          else if (catagory === 'reddit') { redditEmbed.addField(title, dsc) }
          else if (catagory === 'owner') { ownerEmbed.addField(title, dsc) }
          else if (catagory === 'bot') { mainEmbed.addField(title, dsc) }
          else { mainEmbed.addField(title, dsc) }
        });

        const m = await message.channel.send(mainEmbed);

        setTimeout(function close() {
          m.edit(CLOSED);
          m.reactions.removeAll()
          m.delete({ timeout: 15000 });
          if (message.deletable) return message.delete();
        }, 900000);


        await menu.buttons(
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

            emoji: "🔥",
            async clicked() {
              await m.edit(redditEmbed);
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
            emoji: "❌",
            async clicked(u, r) {
              m.edit(CLOSED);
              m.reactions.removeAll()
              m.delete({ timeout: 15000 })
              if (message.deletable) return message.delete();

              r.cancel();

            }
          },
        );

      });

    }

  }

};
