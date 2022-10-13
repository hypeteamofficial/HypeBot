var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const fetch = require('node-superfetch');
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
    name: 'dadjoke',
    desc: 'Get a random dadjoke',
    aliases: ['joke'],
    execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
 // levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
        var joke = await fetch
            .get("https://icanhazdadjoke.com/")
            .set("Accept", "application/json");

        try {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Here's a joke!`, 'https://images2.imgbox.com/10/93/A7mqUZ8U_o.png')
                .setDescription(joke.body.joke)
                .setColor(16295218);
            return message.channel.send({embed });

        } catch (err) {
            return message.channel.send(`Command failed, try again.`)
            log.error(err)
        }
        if (message.deletable) return message.delete();
    }
};