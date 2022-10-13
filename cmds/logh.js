// Betterlogs Discord Version

// Load Dependencies
var colors = require('colors/safe');
 const { Webhook, MessageBuilder } = require('discord-webhook-node');

class log {

  constructor() {
    this.name = "BetterLogs"
    this.url = "n/a"
  }

  silly(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.silly(`silly | `) + msg); //send to console

    const embed = new MessageBuilder() // Create Styled embed
      .setTitle('😋 Silly')
      .setColor("#f8a532")
      .setDescription(msg)
    this.dlog.send(embed); // send embed to webhook

  }

  verbose(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.verbose(`verbose | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('💬 Verbose')
      .setColor('#1285b0')
      .setDescription(msg)
    this.dlog.send(embed);

  }

  info(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.info(`info | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('ℹ️ Info')
      .setColor('#009126')
      .setDescription(msg)
    this.dlog.send(embed);
  }

  data(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.data(`data | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('📜 Data')
      .setColor('#435569')
      .setDescription(msg)
    this.dlog.send(embed);
  }

  help(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.help(`help | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('🆘 Help')
      .setColor('#0093b0')
      .setDescription(msg)
    this.dlog.send(embed);

  }

  warn(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.warn(`warning | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('⚠️ Warning')
      .setColor('#FFFF00')
      .setDescription(msg)
    this.dlog.send(embed);

  }
  debug(msg) {
   
    console.log(colors.debug(`debug | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('⚒️ Debug')
      .setColor('#237cf2')
      .setDescription(msg)
    this.dlog.send(embed);
  }

  error(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.error(`error | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('⚠️ Error')
      .setColor('#ff5b4a')
      .setDescription(msg)
    this.dlog.send(embed);

  }

  server(msg) {
    if (!msg[0]) var msg = "Undifined"
    console.log(colors.server(`server | `) + msg);
    const embed = new MessageBuilder()
      .setTitle('🖥️ Server')
      .setColor('#41a5f2')
      .setDescription(msg)
    this.dlog.send(embed);

  }

  setname(name) {
    this.name = name;

  }
  setURL(whurl) {
    this.url = whurl;
  }
  load() {
    const dlog = new Webhook(this.url);
    dlog.setUsername(this.name);
    this.dlog = dlog
    colors.setTheme({
      silly: 'rainbow',
      verbose: 'cyan',
      info: 'green',
      data: 'grey',
      help: 'cyan',
      warn: 'brightYellow',
      debug: 'blue',
      server: 'brightBlue',
      error: 'red'
    })
    this.dlog.success('**BetterLogs**', 'Successfuly Loaded!', `BetterLogs Made By ᛃHʏᴘᴇTᴇᴀᴍᛃ`);
    console.log(colors.info(`BL2D | `) + `Successfuly Loaded!`)
  }

}














// export log types
module.exports = log;

