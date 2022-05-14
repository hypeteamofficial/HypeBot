var { tall } = require('tall');
const isURL = require("is-url");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
module.exports = {
  catagory: 'util',
  name: 'unshortenurl',
  desc: 'A Url UnShortener (does not work on urls that do not instantly redirect)',
  aliases: ["unurlshorten", "unshortenlink", "unurishorten", "unshortenurl"],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
    message.channel.startTyping();
    if (args.length === 0) {
      message.channel.stopTyping();
      message.reply("you need to provide a URL to Unshorten!");
    } else {
      const rurl = args[0]
      if (isURL(rurl)) {
        tall(rurl)
          .then(function(unshortenedUrl) {
            client.api.channels[message.channel.id].messages.post({
              data: {
                "content": `Original URL: <${rurl}>\nUnShortened URL: <${unshortenedUrl}>`,
                "components": [
                  {
                    "type": 1,
                    "components": [
                      {
                        "type": 2,
                        "label": "Click to visit UnShortened URL",
                        "style": 5,
                        "url": `${unshortenedUrl}`
                      }
                    ]

                  }
                ]
              }
            })
            message.channel.stopTyping();
          })
          .catch(function(err) {
            log.error(`ERROR: ${err} \nrURL: ${rurl}`)
          })
      } else {
        message.channel.stopTyping();
        message.reply("you need to provide a URL to shorten!");
      }
    }
    if (message.deletable) return message.delete();
  }
};