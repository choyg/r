require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('./bot.service');

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  bot.onMessage(msg);
});