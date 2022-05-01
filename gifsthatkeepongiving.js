const request = require("request");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const sub = "gifsthatkeepongiving"

module.exports = {
  catagory: 'reddit',
  name: 'gifsthatkeepongiving',
  desc: 'Get a random post from r/gifsthatkeepongiving',
  aliases: ['gifs', 'gif'],
  execute: async (log, message, args, client, db, packageInfo, Discord, member) => {
      // start
const embed = new Discord.MessageEmbed();
      
message.channel.startTyping();
      
request({
    uri: "https://www.reddit.com/r/" + sub + "/random/.json", // URL
    json: true
}, (error, response, body, json) => {
    if (error) throw new Error(error);

    const [list] = response.body;
    const [post] = list.data.children;

    const permalink = post.data.permalink;
    const postUrl = `https://reddit.com${permalink}`;
    const postImage = post.data.url;
    const postTitle = post.data.title;
    const postUpvotes = post.data.ups;
    const postNumComments = post.data.num_comments;
    const postAuthor = post.data.author;
    const postDesc = post.data.selftext;
  
    embed.setTitle(`${postTitle}`);
    embed.setAuthor(postAuthor);
    embed.setThumbnail('https://styles.redditmedia.com/t5_39ssk/styles/communityIcon_jyip5i6m9al31.jpg')
    embed.setDescription(postDesc);
    embed.setURL(`${postUrl}`);
    embed.setColor('RANDOM');
    embed.setImage(postImage);
    embed.setFooter(`👍 ${postUpvotes} 💬 ${postNumComments} | ` + "Provided by r/" + sub);
    message.channel.send(embed);

    message.channel.stopTyping();
});

      //end
 if (message.deletable) return message.delete();
}};