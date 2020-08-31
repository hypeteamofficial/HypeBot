var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'fun',
  name: 'dice',
  desc: 'Role a die!',
  aliases: ["roll", "die", "rng", "random"],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    const m = await message.channel.send(`🎲 *ROLLING*`)
    await setTimeout(() => {   
    let random = Math.floor((Math.random() * 6));
    m.edit(`🎲 The dice landed on ${random}.`);
    }, 4000);

 if (message.deletable) return message.delete();
}};