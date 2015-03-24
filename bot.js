var irc = require('irc');
var config = require('./config').bot;

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

/* Check bot connected to server */
bot.addListener('raw', function(message) {
  if (message.rawCommand == '001') {
    console.log('Bot connected to server');
  }
});

module.exports = {
  bot: bot
};