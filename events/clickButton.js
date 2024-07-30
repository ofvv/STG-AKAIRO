const akairo = require('discord-akairo');

class ClickButton extends akairo.Listener {
  constructor() {
    super('clickButton', {
      emitter: 'client',
      event: 'clickButton'
    });
  }

  async exec(button) {
    if (button.id === 'say') {
      if (!button.clicker.user.id.includes(this.client.ownerID)) return;
      button.defer()
      let filter = m => m.author.id === button.clicker.user.id;

      let collector = new this.client.lib.MessageCollector(button.channel, filter, {
        max: 1,
        time: 1000 * 15
      })

      collector.on('collect', async m => {
        m.delete()
        button.channel.send(m.content)
      })
    }
  }
}

module.exports = ClickButton;
