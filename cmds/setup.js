var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'bot',
  name: 'setup',
  desc: 'Setup the server!\n >>> ``setup <announcement | Welcome> <#Channel>``',
  aliases: ['aliases'],
  execute: async (message, args, client, db, packageInfo, Discord, member, mpembed) => {
  if (!message.member.hasPermission('MANAGE_GUILD') && !ids.includes(message.author.id)) return message.reply(mpmsg);
  if (args[0] === `welcome`) {
    const channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    const filter = m => message.author.id === m.author.id;
    db.set(`welchannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`Welcome Channel is set to ${channel}, Now What Will The Message Be?`) //send success message
    message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
		.then(messages => {
			message.channel.send(`The Message Will Be: ${messages.first().content}`);
      db.set(`welmsg_${message.guild.id}`, messages.first().content)

		})
		.catch(() => {
			message.channel.send('You did not enter any input!');
		});

  }
  else if (args[0] === `announcement`) {
    const channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { 
      return message.channel.send("Please Mention the channel first")
    }

    db.set(`annchannel_${message.guild.id}`, channel.id) 
    
    message.channel.send(`Anouncement Channel is set to ${channel}!`) 

  }

}};