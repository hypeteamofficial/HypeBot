const request = require("request");
var bowner = '531186390717825074';
const mpmsg = `!!ERROR!!\nYou dont have the required perms!`
const sub = "mildlyinteresting"

module.exports = {
  catagory: 'reddit',
  name: 'mildlyinteresting',
  desc: 'Get a random post from r/mildlyinteresting',
  aliases: ['mildlyinteresting','interesting'],
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
    embed.setThumbnail('https://b.thumbs.redditmedia.com/lTgz7Yx_6n8VZemjf54viYVZgFhW2GlB6dlpj1ZwKbo.png')
    embed.setDescription(postDesc);
    embed.setURL(`${postUrl}`);
    embed.setColor(16295218);

  
    if ( isValidImageURL(postImage) ){
      embed.setImage(postImage);
    }

    function isValidImageURL(str){
        if ( typeof str !== 'string' ) return false;
        return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
    }
    embed.setFooter(`👍 ${postUpvotes} 💬 ${postNumComments} | ` + "Provided by r/" + sub);
    message.channel.send(embed);

    message.channel.stopTyping();
});

      //end
 if (message.deletable) return message.delete();
}};