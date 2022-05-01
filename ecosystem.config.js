module.exports = {
  apps : [{
    name: 'HypeBot',
    script: 'index.js',
    watch: false 
  },{
    name: "PM2Bot", 
    script : "pm2bot.js",
    watch: false 
  }],
  
};