const discord = require("discord.js");
const config = require(`${process.cwd()}/config.json`);
const akairo = require('discord-akairo');

const { MessageButton } = require("discord-buttons")

class Client extends akairo.AkairoClient {
  constructor(options = {}) {
    super({
      ownerID: options.ownerID || options.ownerid,
    }, {
      disableMentions: options.disableMentions || options.mentions
    });
    this.commands = new akairo.CommandHandler(this, {
      directory: options.commands || './commands/',
      prefix: options.prefix || ['akairo!'],
      defaultCooldown: options.defaultCD || 1000,
      ignoreCooldown: options.ownerID || options.ownerid
    });
    this.events = new akairo.ListenerHandler(this, {
      directory: options.events || './events/'
    });
    this.commands.useListenerHandler(this.events);
    this.events.loadAll();
    this.commands.loadAll();
    this.lib = discord;
    this.config = config;
    this.MessageButton = MessageButton;
    require('discord-buttons')(this)
    require('discord-reply')
  }
}

module.exports = Client;
