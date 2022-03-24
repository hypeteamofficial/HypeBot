var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const fetch = require('node-superfetch');
module.exports = {
    catagory: 'fun',
    name: 'dadjoke',
    desc: 'Get a random dadjoke',
    aliases: ['joke'],
    execute: async (message, args, client, db, packageInfo, Discord, member) => {
        var joke = await fetch
            .get("https://icanhazdadjoke.com/")
            .set("Accept", "application/json");

        try {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Here's a joke!`, 'https://images2.imgbox.com/10/93/A7mqUZ8U_o.png')
                .setDescription(joke.body.joke)
                .setColor(16295218);
            return message.channel.send({embed });

        } catch (err) {
            return message.channel.send(`Consult your dad! My API isn't working!`)

        }
        if (message.deletable) return message.delete();
    }
};