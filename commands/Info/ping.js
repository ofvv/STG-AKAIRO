const akairo = require('discord-akairo');

class Ping extends akairo.Command {
  constructor() {
    super('ping', {
      category: "Info",
      aliases: ['ping', 'pong'],
      cooldown: 10000,
    });
  }
  async exec(message) {
    const discord = require("discord.js")
    const client = this.client;
    async function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    let start = Date.now();
    message.lineReplyNoMention({
      embed: {
        description: "**Pinging...**",
        color: "#000000"
      }
    }).then(m => {

      let end = Date.now();

      const taken = millisToMinutesAndSeconds(end - start);

      let ping = end - start - 100;

      let pingemoji;

      let clientping;

      let client_ping = Math.round(client.ws.ping);

      let average;
      let write;
      let read;

      let pings = {
        "high": 350,
        "medium": 150,
        "low": 50
      }

      if (client_ping > pings.high) {
        clientping = '🔴';
      } else if (client_ping > pings.medium) {
        clientping = '🟡';
      } else clientping = '🟢';

      if (ping > pings.high) {
        pingemoji = '🔴';
      } else if (ping > pings.medium) {
        pingemoji = '🟡';
      } else pingemoji = '🟢';

      if (client_ping < 1) {
        client_ping = 30;
      }

      let embed = new discord.MessageEmbed()
        .addField("WS Ping:", `\`\`\`yaml\n ${clientping || `❔`} ${client_ping - 10} ms \n\`\`\``, true)
        .addField(`Client Ping:`, `\`\`\`yaml\n ${pingemoji || `❔`} ${ping} ms \n\`\`\``, true)
        .setColor("#000000");
      m.edit(embed).catch(e => message.lineReplyNoMention(e))

    })
    //return message.lineReplyNoMention(`**${this.client.user.username}'s Ping Is \`${this.client.ws.ping}ms\`**`);
  }
}

module.exports = Ping;
