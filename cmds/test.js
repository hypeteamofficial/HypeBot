var bowner = ['531186390717825074', '558045615511044115'];
const mpmsg = `!!ERROR!!\nYou are not my owner!`
// levels
const log = require('./logh.js');

const level = 2 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
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
  catagory: 'owner',
  name: 'test',
  desc: 'description',
  execute: async ( message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);

  
log.url('https://discord.com/api/webhooks/1014311342506790974/6T97IDtTs1-jiY9YaIsKjTio-k1Vw1Vc2OmFfQJ1V3NfsXDUS6I4q866lchOfkurGUss')
    log.name("test")
    log.load()
log.debug('Hey')


 if (message.deletable) return message.delete();
}};