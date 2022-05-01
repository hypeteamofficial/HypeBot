var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const moment = require("moment");
// utils
const filterLevels = {
    DISABLED: "Off",
    MEMBERS_WITHOUT_ROLES: "No Role",
    ALL_MEMBERS: "Everyone",
};

const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "(╯°□°）╯︵ ┻━┻",
    VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻",
};

const regions = {
    brazil: "Brazil",
    europe: "Europe",
    hongkong: "Hong Kong",
    india: "India",
    japan: "Japan",
    russia: "Russia",
    singapore: "Singapore",
    southafrica: "South Africa",
    sydney: "Sydney",
    "us-central": "US Central",
    "us-east": "US East",
    "us-west": "US West",
    "us-south": "US South",
};
module.exports = {
  catagory: 'util',
  name: 'serverinfo',
  desc: 'Get The Servers Info',
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
            const roles = message.guild.roles.cache
                .sort((a, b) => b.position - a.position)
                .map((role) => role.toString());

            
            const members = message.guild.memberCount;
            const emojis = message.guild.emojis.cache;
            const embed = new Discord.MessageEmbed()
                .setDescription(
                    `**Server information for __${message.guild.name}__**`,
                )
                .setColor(16295218)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField(
                    "\u200b",
                    [
                        `**Name**: ${message.guild.name}`,
                        `**<:OWNER:746502146232418374> Owner:** ${message.guild.owner}`,
                        `**:map: Region:** ${regions[message.guild.region]}`,
                    ],
                    
                )
                .addField(
                    "\u200b",
                    [
                        `**<:BOOSTER:746502950536347649> Boost Tier:** ${
                            message.guild.premiumTier
                                ? `Tier ${message.guild.premiumTier}`
                                : "None"
                        }`,
                        `**🤬 Explicit Filter:** ${
                            filterLevels[message.guild.explicitContentFilter]
                        }`,
                        `**<:CHECK:746502146056388609>  Verification Level:** ${
                            verificationLevels[message.guild.verificationLevel]
                        }`,
                    ],
                    
                )
                .addField(
                    "\u200b",
                    [
                        `**⌚ Time Created:** <t:${parseInt(message.guild.createdTimestamp / 1000)}:t> <t:${parseInt(message.guild.createdTimestamp / 1000)}:D> | <t:${parseInt(message.guild.createdTimestamp / 1000)}:R>`,
                    ],
                
                )
                .addField(
                    "\u200b",
                    [
                        `**<:CHANNEL:746502146073165855> Text Channels:** ${
                            message.guild.channels.cache.filter(
                                (channel) => channel.type === "text",
                            ).size
                        }`,
                        `**<:VOICE:746502145943011422> Voice Channels:** ${
                            message.guild.channels.cache.filter(
                                (channel) => channel.type === "voice",
                            ).size
                        }`,
                        `**<:EMOTES:746505245504569354> Emotes:** ${
                            emojis.size
                        }`,
                        `**<:MEMBERS:746505245240066080> Members:** ${
                            members.size
                        }`,

                    ],
                   
                )
                .setTimestamp();
            message.channel.send(embed);
        
    
 if (message.deletable) return message.delete();
}};