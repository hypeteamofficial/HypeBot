var shortUrl = require("cdpt");
const isURL = require("is-url");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
// levels
const level = 1 // 0 Disabled | 1 Enabled | 2 Testing | 3 Debug | 4 Developer Only
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
  catagory: 'util',
  name: 'shortenurl',
  desc: 'A Url Shortener',
  aliases: ["urlshorten", "shortenlink", "urishorten", "shortenurl"],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
// levels
 if (level == 0) return message.reply(`This command is Disabled! ${status}`);
 if (level == 4 && !bowner.includes(message.author.id)) return message.reply("This command is Developer only!");
 if (level == 3 && !bowner.includes(message.author.id)) return message.reply("This command is in debug mode!");
 if (level == 2 && !bowner.includes(message.author.id)) return message.reply("This command is being tested!");
    message.channel.startTyping();
    if (args.length === 0) {
      message.channel.stopTyping();
      message.reply("you need to provide a URL to shorten!");
    } else {
      const rurl = args[0]
      if (isURL(rurl)) {
        shortUrl.short(rurl, function(err, url) {
          if (url) {

            client.api.channels[message.channel.id].messages.post({
              data: {
                "content": `Original URL: <${rurl}>\nShortened URL: <${url}>`,
                "components": [
                  {
                    "type": 1,
                    "components": [
                      {
                        "type": 2,
                        "label": "Click to visit shortened URL",
                        "style": 5,
                        "url": `${url}`
                      }
                    ]

                  }
                ]
              }
            })
            message.channel.stopTyping();
            if (message.deletable) return message.delete();

          }
          if (err) { log.error(`ERROR: ${err} \nrURL: ${rurl}`) }

        });
      } else {
        message.channel.stopTyping();
        message.reply("you need to provide a URL to shorten!");
      }
    }
    if (message.deletable) return message.delete();
  }
};