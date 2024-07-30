const akairo = require('discord-akairo');

class Say extends akairo.Command {
  constructor() {
    super('say', {
      category: "Owner",
      aliases: ['say', 'kaji'],
      cooldown: 10000,
      args: [{
        id: 'args',
        match: 'content'
      }]
    });
  }

  async exec(message, args) {
    if (!message.author.id.includes(this.client.ownerID)) return;
    if (!args.args) {
      return message.lineReplyNoMention('**what should i say**')
    }
    message.lineReplyNoMention(args.args)
  }
}

module.exports = Say;
