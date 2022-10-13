var bowner = '531186390717825074';
// levels
const level = 0 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
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
  name: 'scratchcomment',
  desc: 'Says somthing in our scatch Studio!',
  aliases: [],
  execute: async (log, message, args, client, db, packageInfo, Discord, member, scratchBOT) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    if (!args[0]) return message.reply('You need to imput a Message BOI');
    let user = message.author;
    args = args.join(" ");
    const valid = await scratchBOT.verify();
    if (!valid) {
      log.debug(`No access`); 
      const reply = await message.channel.send(`${message.author},` + "Failed to access HypeBot on Scratch")
    reply.delete({ timeout: 15000 });
    }
    if (valid) { 
      await scratchBOT.comment({
      studio: `31610727`,
      content: `${user.username}#${user.discriminator}: ${args}`
    });
      const reply = await message.channel.send(`msg sent \n` + `${user.username}#${user.discriminator}: ${args}`)
    reply.delete({ timeout: 15000 });
    }
    
  }
};