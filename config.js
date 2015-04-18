module.exports = {
  bot: {
    channels: ['#cambridge'],
    server: process.env.TCORE_SERVER || 'irc.freenode.net',
    botName: process.env.TCORE_BOTNAME || 'tcore-bot'
  }
}