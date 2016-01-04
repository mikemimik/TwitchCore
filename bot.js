var irc = require('irc');
var config = require('./config').bot;

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels,
  debug: config.debug
});

/* Check bot connected to server */
bot.addListener('raw', function(message) {
  if (message.rawCommand === '001') {
    console.log('Bot connected to server');
  }
});

bot.addListener('message', function(from, to, message) {
  console.log('%s => %s: %s', from, to, message);
});

bot.addListener('error', function(message) {
  console.log('bot error: ', message);
});

module.exports = {
  bot: bot
};