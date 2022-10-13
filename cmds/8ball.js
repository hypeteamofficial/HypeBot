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
  name: '8ball',
  desc: 'Ask The Majik 8Ball a question!',
  status: 'enabled', // disabled | owneronly | debug | testing
  aliases: ["magicball", "magikball", "magic8ball", "magik8ball", "eightball"],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {

// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  const m = await message.channel.send(`🎱 *SHAKING 8BALL*`);
  await setTimeout(() => {
   m.edit(`🎱 *LOOKING AT RESPONSE*`);
  }, 2000);
  setTimeout(() => {
  let random = Math.floor((Math.random() * responses.length));
   m.edit(`🎱 ${responses[random]}`);
   }, 4000);
 if (message.deletable) return message.delete();
}};