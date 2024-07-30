const discord = require("discord.js");
const config = require("./config.json");
const akairo = require('discord-akairo');

const ziro = require(`${process.cwd()}/Structures/index`)

const client = new ziro.Client({
  ownerID: config.bot.owners,
  disableMentions: 'everyone',
  prefix: ['akairo!', 'ziro!'],
  defaultCD: 1000,
  commands: './commands/',
  events: './events/'
});
client.login(config.bot.token);
