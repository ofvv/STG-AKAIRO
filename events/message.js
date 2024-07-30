const akairo = require('discord-akairo');

class Message extends akairo.Listener {
  constructor() {
    super('message', {
      emitter: 'client',
      event: 'message'
    });
  }

  async exec(message) {
    
  }
}

module.exports = Message;
