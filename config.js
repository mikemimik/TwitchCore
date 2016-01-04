module.exports = {
  bot: {
    server: process.env.TCORE_SERVER || 'irc.freenode.net',
    botName: process.env.TCORE_NICK || 'collins',
    userName: process.env.TCORE_USERNAME || 'jcollins',
    realName: process.env.TCORE_REALNAME || 'JarvisCollins',
    // port: process.env.TCORE_PORT || 6667,
    // localAddress: null,
    debug: process.env.ENV === 'PRODUCTION' ? false : true,
    // showErrors: false,
    // autoRejoin: true,
    // autoConnect: true,
    channels: ['#cambridge'],
    // retryCount: 3,
    // retryDelay: 5000,
    // secure: false,
    // selfSigned: false,
    // certExpired: false,
    // floodProtection: true,
    // floodProtectionDelay: 1000,
    // sasl: false,
    // stripColors: false,
    // channelPrefixes: '$#',
    // messageSplit: 512,
    // encoding: false,
    // webirc: {
      // pass: '',
      // ip: '',
      // user: ''
    // }
  }
};