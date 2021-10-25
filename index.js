const discord = require('discord.js');
const bot = new discord.Client();
const token = "";

bot.on('ready', () => {
    console.log('Ted-Bot se conectou ao servidor!');
});

bot.on('message', message => {
    if(message.author.bot) return;
  //commands
  if(message.content.indexOf(".server") > -1)
  {
      message.channel.send("IP do Servidor: play.pc-rpg.com:7777");
      message.channel.send("Website oficial/UCP: http://pc-rpg.com");
      message.channel.send("Fórum: (inativo temporariamente)");
  }
  if(message.content.indexOf(".beer") > -1)
  {
      var messages = [
          "Eu ouvi cerveja?",
          "Cerveja? Onde?",
          "Cerveja? Cerveja? CERVEJA? CERVEJAAAAAAAAAAAAA?!?!!"
      ];
      message.reply(messages[Math.floor(Math.random() * messages.length)]);
  }

  //auto-answer
  if(message.content.indexOf("Olá") > -1)
  {
      var messages = [
          "Olá! Trouxe cerveja pra mim?",
          "Olá! Acho que hoje vou ficar só no suquinho... *buaghghl*",
          "Olá!"
      ];
      message.reply(messages[Math.floor(Math.random() * messages.length)]);
  }

  if(message.content.indexOf("Eae") > -1)
  {
      var messages = [
          "Eae! Beleza?",
          "Eae! Tranquilo, glup.",
          "Eae!"
      ];
      message.reply(messages[Math.floor(Math.random() * messages.length)]);
  }

  if(message.content.indexOf("Bom dia") > -1)
  {
      var messages = [
          "Bom dia! Vamos tomar uma gelada hoje ou vai ficar só no suquinho?",
          "Bom dia! Cara, que ressaca...",
          "Bom dia! Acho que vou dar uma passada alí no alhambra.",
          "Bom dia! *vomito*",
          "Bom dia!"
      ];
      message.reply(messages[Math.floor(Math.random() * messages.length)]);
  }

  if(message.content.indexOf("Boa tarde") > -1)
  {
      var messages = [
          "Boa tarde! Vamos tomar uma gelada hoje ou vai ficar só no suquinho?",
          "Boa tarde! Cara, que ressaca...",
          "Boa tarde! Acho que vou dar uma passada alí no alhambra.",
          "Boa tarde! *vomito*",
          "Boa tarde!"
      ];
      message.reply(messages[Math.floor(Math.random() * messages.length)]);
  }

  if(message.content.indexOf("Boa noite") > -1)
  {
      var messages = [
          "Boa noite! Vamos tomar uma gelada hoje ou vai ficar só no suquinho?",
          "Boa noite! Cara, que ressaca...",
          "Boa noite! Acho que vou dar uma passada alí no alhambra.",
          "Boa noite! *vomito*",
          "Boa noite!"
      ];
      message.reply(messages[Math.floor(Math.random() * messages.length)]);
  }
});

bot.login(token);
