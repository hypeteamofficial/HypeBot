const ver = "4.0"
module.exports.version = ver;
var bowner = '531186390717825074';

const Discord = require('discord.js');
const log = require('betterlogs-discord');
const fs = require('fs');

const client = new Discord.Client
const prefix = process.env.PM2BOT_PREFIX;

client.commands = new Discord.Collection();
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.once('ready', () => {
	log.server('PM2Bot online!');
 client.user.setActivity(`over HypeBot`, { type: 'WATCHING' });
});

const commandFolder = fs.readdirSync('./PM2cmds').filter(file => file.endsWith('.js'));

for (const file of commandFolder) {
    const command = require(`./PM2cmds/${file}`);

    client.commands.set(command.name, command);
}
//member
client.on('message', message => {
  if(message.author.bot) return;
  
  	const prefixRegex = new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;
  if (!bowner.includes(message.author.id)) return message.reply("You are not my dad!");
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	
};
 
	try {
    const packageInfo = require('./package.json');
		command.execute(log, message, args, client, packageInfo, Discord);
	} catch (error) {
		log.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(process.env.PM2BOT_TOKEN)


