const akairo = require('discord-akairo');

class Ready extends akairo.Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    async exec() {
      let logs = [
        "Client: " + this.client.user.tag,
        "ID: " + this.client.user.id,
        "Servers: " + this.client.guilds.cache.size,
        "Users: " + this.client.users.cache.size,
        "Channels: " + this.client.channels.cache.size,
        "Owner ID: " + this.client.ownerID,
        "Token: " + this.client.config.bot.token.substring(0, 35) + '........'
      ]
        console.log(logs.join("\n"));
    }
}

module.exports = Ready;
