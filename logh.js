// Betterlogs Discord Version


// Load Dependencies
var colors = require('colors/safe');
const { Webhook, MessageBuilder } = require('discord-webhook-node');

// Get Config from .env
const logWH = process.env.LOGURL

// Setup Webhooks
const dlog = new Webhook(logWH);
dlog.setUsername('BetterLogs');

// setup Colors
colors.setTheme({
  silly: 'rainbow',
  verbose: 'cyan',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'brightYellow',
  debug: 'blue',
  server: 'brightBlue',
  error: 'red'})

// send Loaded notif
dlog.success('**BetterLogs**', 'Successfuly Loaded!',`BetterLogs Made By ᛃHʏᴘᴇTᴇᴀᴍᛃ`);
console.log(colors.info(`BL2D | `) + `Successfuly Loaded!`)


// Seting the diffrent log types
function silly(msg){

 console.log(colors.silly(`silly | `) + msg); //send to console

  const embed = new MessageBuilder() // Create Styled embed
  .setTitle('😋 Silly')
  .setColor("#f8a532")
  .setDescription(msg)
  dlog.send(embed); // send embed to webhook

}
function verbose(msg){

 console.log(colors.verbose(`verbose | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('💬 Verbose')
  .setColor('#1285b0')
  .setDescription(msg)
  dlog.send(embed);
  
}
function info(msg){

 console.log(colors.info(`info | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('ℹ️ Info')
  .setColor('#009126')
  .setDescription(msg)
  dlog.send(embed);
  
}
function data(msg){

 console.log(colors.data(`data | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('📜 Data')
  .setColor('#435569')
  .setDescription(msg)
  dlog.send(embed);
}
function help(msg){

 console.log(colors.help(`help | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('🆘 Help')
  .setColor('#0093b0')
  .setDescription(msg)
  dlog.send(embed);
  
}
function warn(msg){

 console.log(colors.warn(`warning | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('⚠️ Warning')
  .setColor('#FFFF00')
  .setDescription(msg)
  dlog.send(embed);
  
}
function debug(msg){

 console.log(colors.debug(`debug | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('⚒️ Debug')
  .setColor('#237cf2')
  .setDescription(msg)
  dlog.send(embed);
  
}
function error(msg){

 console.log(colors.error(`error | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('⚠️ Error')
  .setColor('#ff5b4a')
  .setDescription(msg)
  dlog.send(embed);
  
}
function server(msg){

 console.log(colors.server(`server | `) + msg);
   const embed = new MessageBuilder()
  .setTitle('🖥️ Server')
  .setColor('#41a5f2')
  .setDescription(msg)
  dlog.send(embed);
  
}

// export log types
module.exports.silly = silly;
module.exports.verbose = verbose;
module.exports.info = info;
module.exports.data = data;
module.exports.help = help;
module.exports.warn = warn;
module.exports.debug = debug;
module.exports.error = error;
module.exports.server = server;
