var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const {exec} = require("child_process");
module.exports = {
  catagory: 'owner',
  name: 'list',
  desc: 'description',
  aliases: ['l'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
     if (!bowner.includes(message.author.id)) return message.reply(mpmsg);
    
    const shell = exec("pm2 list");
    shell.stdout.on("data", data => {
    log.data(`stdout: ${data}`);
      message.channel.send(`stdout: \n \`\`\`\n${data}\n\`\`\``)
});

shell.stderr.on("data", data => {
    log.data(`stderr: ${data}`);
    message.channel.send(`stderr: \n \`\`\`\n${data}\n\`\`\``)
});

shell.on('error', (error) => {
    log.error(`error: ${error.message}`);
    message.channel.send(`error: \`${data}\``);
});

shell.on("close", code => {
    log.data(`child process exited with code ${code}`);
});
}};