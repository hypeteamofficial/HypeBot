var bowner = '531186390717825074';
module.exports = {
  catagory: 'fun',
  name: 'scratchcomment',
  desc: 'Says somthing in our scatch Studio!',
  aliases: [],
  execute: async (log, message, args, client, db, packageInfo, Discord, member, scratchBOT) => {
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