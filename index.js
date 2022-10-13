const ver = "4.0"
module.exports.version = ver;

const Discord = require('discord.js');
const log = require('betterlogs-discord');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


const fs = require('fs');


const Database = require("@replit/database")
// const Scratch = require("new-scratch3-api");
const badge = {
  "531186390717825074": "<:hypeshiny:957343373503655976>"
}
const bot = {
  "true": "<:BOT:746540840087978044>",
  "false": "<:MEMBERS:746505245240066080>",
  "bowner": ""
}

const db = new Database()
const client = new Discord.Client
client
  .on("warn", log.warn)
const token = process.env.TOKEN;
const prefix = "$"
const scratchpass = process.env.SCRATCHPASS;

const altprefix = `//`;
client.commands = new Discord.Collection();
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Scratch
// async function loadScratchBOT() {
// scratchBOT = new Scratch.UserSession();
// await scratchBOT.load("HypeBot", scratchpass);
// const valid = await scratchBOT.verify();
// if (valid) log.server(`ScratchBot online!`)
// if (!valid) log.server(`ScratchBot offline!`)

// }


function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}



server.listen(2009);

app.get('/', (req, res) => {
  res.sendFile('/vercel/path0/index.html');
});
async function webload() {
  text = await db.get(`currentStatus`);
  io.emit('change_text', {
    text: text
  });
}
io.on('connection', (socket) => {
  webload()
  log.server('a user connected to web');
});


async function webplaying(msg) {
  const text = `playing <b>${msg}</b>`
  io.emit('change_text', {
    text: text
  });
  await db.set(`currentStatus`, text)
};
async function webwatching(msg) {
  const text = `Watching <b>${msg}</b>`
  io.emit('change_text', {
    text: text
  });
  await db.set(`currentStatus`, text)
};
async function weblistening(msg) {
  const text = `Listening to <b>${msg}</b>`
  io.emit('change_text', {
    text: text
  });
  await db.set(`currentStatus`, text)
};

async function statusroll() {
  const customstatus = await db.get(`cst`);

  await client.user.setActivity(customstatus, { type: 'PLAYING' });
  await webplaying(`${customstatus}`)
  await sleep(30000)
  await client.user.setActivity(`${client.guilds.cache.size} Servers!`, { type: 'WATCHING' });
  await webwatching(`${client.guilds.cache.size} Servers!`)
  await sleep(30000)
  await client.user.setActivity(`${client.channels.cache.size} channels!`, { type: 'LISTENING' });
  await weblistening(`${client.channels.cache.size} channels!`)
  await sleep(30000)
  await client.user.setActivity(`${prefix}help`, { type: 'LISTENING' });
  await weblistening(`${prefix}help`)
  await sleep(30000)
  await client.user.setActivity(`Version ${ver}`, { type: 'PLAYING' });
  await webplaying(`Version ${ver}`)
  await sleep(30000)
}



client.once('ready', () => {
  log.server('HypeBot online!');
  statusroll()
  setInterval(function() {
    statusroll()

  }, 5 * 30000);
});



const commandFolder = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of commandFolder) {
  const command = require(`./cmds/${file}`);
  client.commands.set(command.name, command);
}
//member 963510856560312351
client.on('message', message => {
  if (message.author.bot) return;
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefix)}|${escapeRegex(altprefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

  const commandName = args.shift().toLowerCase();
  if (message.author.id == '745786473554378832') return; // SBT
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
    command.execute(log, message, args, client, db, packageInfo, Discord, badge);
  } catch (error) {
    log.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});
function isValidImageURL(str) {
  if (typeof str !== 'string') return false;
  return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp|webp)$/gi);
}
client.on("guildMemberAdd", async (member) => { //usage of welcome event
  let chx = await db.get(`welchannel_${member.guild.id}`); //defining var
  let msg = await db.get(`welmsg_${member.guild.id}`);
  let user = member.user
  let pfplink = user.displayAvatarURL({ format: "png" })

  if (chx === null) { //check if var have value or not
    return;
  }

  let wembed = new Discord.MessageEmbed() //define embed
    .setColor(16295218)
    .setDescription(msg);

  if (isValidImageURL(pfplink)) {
    wembed.setURL(`https://discordapp.com/users/${user.id}`)
    wembed.setAuthor(`${user.username}#${user.discriminator} `, pfplink)
  } else {
    wembed.setAuthor(`${user.username}#${user.discriminator} `)
  }

  client.channels.cache.get(chx).send(`Welcome to the server, ${member}`)




  client.channels.cache.get(chx).send(wembed) //get channel and send embed
});

client.on("guildMemberRemove", async (member) => { //usage of welcome event
  let chx = await db.get(`byechannel_${member.guild.id}`); //defining var
  let user = member.user
  let pfplink = user.displayAvatarURL({ format: "png" })
  if (chx === null) { //check if var have value or not
    return;
  }

  let wembed = new Discord.MessageEmbed() //define embed
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor(16295218)
    .setDescription("Member left.");

  if (isValidImageURL(pfplink)) {
    wembed.setURL(`https://discordapp.com/users/${user.id}`)
    wembed.setAuthor(`${user.username}#${user.discriminator} `, pfplink)
  } else {
    wembed.setAuthor(`${user.username}#${user.discriminator} `)
  }

  client.channels.cache.get(chx).send(wembed) //get channel and send embed
})

client.login(token)
client.on("warn", log.warn)
client.on("error", log.error)
client.on("invalidated", log.warn)
client.on("invalidRequestWarning", log.warn)
client.on("rateLimit", log.warn)
client.on("ready", log.server)
// loadScratchBOT()




// Web Stuff
//app.get('/', (req, res) => {
//    res.send(`\n CDN | ONLINE`);
//});
//app.get('/cdn/:fname', (req, res) => {
// if (!fs.readFileSync('./cdn/' + req.params.fname)) r404(res)
// else
//  res.sendFile(__dirname + '/cdn/' + req.params.fname);
//});
//app.listen(3000, () => log.server('CDN Online!'));
