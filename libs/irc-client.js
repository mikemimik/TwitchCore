'use strict';
var net = require('net');
// var tls = require('tls');
const util = require('util');
const EventEmitter = require('events').EventEmitter;
// var _ = require('lodash');

// TODO: use following modules
// var colors = require('colors');

class BotClient extends EventEmitter {
  constructor(server, nick, options) {
    super();

    /**
     * Variable Declaration
     */
    // INFO: initiate options with defaults
    // INFO: they will later be overwritten by params option
    this._options = {
      server: server,
      nick: nick,
      password: null,
      userName: 'twitchcore-bot',
      realName: 'Twitchcore IRC client',
      port: 6667,
      localAddress: null,
      channels: [],
      debug: false,
      autoRejoin: false,
      autoConnect: true,
      channelPrefixes: '&#'
    };

    // INFO: check options param
    // INFO: set internal options to options sent in params
    // TODO: make this a function that gets called
    if (typeof arguments[2] === 'object') {
      var keys = Object.keys(this[options]);
      for (let i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (arguments[2][k] !== undefined) {
          this._options[k] = arguments[2][k];
        }
      }
    }

    /**
     * Freatures supoorted by server
     * Initial values are RFC 1459 defaults.
     * Zeros signify no default or unlimited value
     */
    this._supportedOptions = {
      channel: {
        idlength: [],
        length: 200,
        limit: [],
        modes: { a: '', b: '', c: '', d: ''},
        types: this._options.channelRefixes
      },
      kicklength: 0,
      maxlist: [],
      maxtargets: [],
      modes: 3,
      nicklength: 9,
      topiclength: 0,
      usermodes: '',
      whox: false,
      capabilities: {}
    };

    this._connection = {};
    /**
     * Functionality Starts
     */
    if (this._options.autoConnect) {
      console.log('>>> BotClient >>> constructor - autoConnect is true');
      this[funcConnect]();
    } else {
      console.log('>>> BotClient >>> constructor - autoConnect is false');
    }

    this.addListener('raw', function(message) {
      console.log('>>> BotClient >>> constructor - addListener(\'raw\')');
    });
  }; // INFO: end of constructor

  _connect(callback) {
  // [funcConnect](callback) {
    if (typeof (callback) === 'function') {

      // INFO: a callback was passed
      console.log('>>> BotClient >>> connect - callback supplied');
      let connectionOptions = {
        port: this[propOptions].port,
        host: this[propOptions].host
      };
      this[propConnection] = net.createConnection(connectionOptions);
    } else {

      // INFO: a callback was NOT passed
      console.log('>>> BotClient >>> connect - callback NOT supplied');
    }
  };

  [funcConnectionHandler]() {

  };
}

module.exports = BotClient;