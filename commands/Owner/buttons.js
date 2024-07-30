const akairo = require('discord-akairo');

class Button extends akairo.Command {
  constructor() {
    super('button', {
      category: "Owner",
      aliases: ['button'],
      cooldown: 10000,
    });
  }

  async exec(message) {
    if (!message.author.id.includes(this.client.ownerID)) return;

    const button = new this.client.MessageButton()
      .setStyle('green')
      .setLabel('Say')
      .setID('say')

      message.delete()

    message.channel.send('**Function**', button).then(async msg => {
      msg.delete({timeout: 5000})
    })
  }
}

module.exports = Button;
