var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`

module.exports = {
  catagory: 'fun',
  name: '8ball',
  desc: 'Ask The Majik 8Ball a question!',
  aliases: ["magicball", "magikball", "magic8ball", "magik8ball", "eightball"],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
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