const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: "YOUR_ATERNOS_IP",
    port: YOUR_PORT,
    username: "BotName"
  });

  bot.on('login', () => console.log('Bot Joined!'));
  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message === 'hi') bot.chat('Hello!');
  });

  bot.on('end', createBot);
}

createBot();
