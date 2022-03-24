var bowner = ['531186390717825074', '558045615511044115'];
const mpmsg = `!!ERROR!!\nYou are not my owner!`
module.exports = {
  catagory: 'owner',
  name: 'test',
  desc: 'description',
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    if (!bowner.includes(message.author.id)) return message.reply(mpmsg);

    let role = message.guild.roles.cache.find(r => r.id === "750043733256437861");
  message.author.roles.add(role);

 if (message.deletable) return message.delete();
}};