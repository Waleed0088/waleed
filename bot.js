const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

    console.log(`Logged in as [ Pharaohs]`);

});
client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('وعليكم السلام ولكم يلبي 🌚.');

  }

});



client.login(process.env.BOT_TOKEN);
