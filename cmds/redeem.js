var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'bot|fun|util|mod|owner',
  name: 'NAME',
  desc: 'description',
  aliases: ['aliases'],
  execute: async (message, args, client, db, packageInfo, Discord, member) => {
    db.get("SELECT * FROM promo_codes where code=?", args[0], errorHandler)
    db.set(`premium_${message.author.id}`, `TRUE`)
 if (message.deletable) return message.delete();
}};