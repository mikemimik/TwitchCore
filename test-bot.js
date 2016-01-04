var Bot = require('./libs/irc-client.js');

var server = 'chat.freenode.net';
var nick = 'collins';
var botOptions = {
  debug: true
};

// INFO: instance of irc-client aka bot
var instance = new Bot(server, nick, botOptions);

// TEST: testing function for emitting events
function emitStuffTest() {
  instance.emit('cat');
  instance.emit('dog');
  instance.emit('goat');
}


// INFO: emitter catch-all
function logAllEmitEvents(eventEmitter) {
  var emitToLog = eventEmitter.emit;

  eventEmitter.emit = function() {
    var event = arguments[0];
    console.log('event emitted: ' + event);
    emitToLog.apply(eventEmitter, arguments);
  };
};

// INFO: pass instance of client to logging function
logAllEmitEvents(instance);
instance._connect(function() {
  console.log('connect callback');
});

instance.on('cat', function() {
  console.log('meow');
});



emitStuffTest();