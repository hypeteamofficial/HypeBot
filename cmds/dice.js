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
  name: 'dice',
  desc: 'Role a die!',
  aliases: ["roll", "die", "rng", "random"],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    const m = await message.channel.send(`🎲 *ROLLING*`)
    await setTimeout(() => {   
    let random = Math.floor((Math.random() * 6));
    m.edit(`🎲 The dice landed on ${random}.`);
    }, 4000);

 if (message.deletable) return message.delete();
}};