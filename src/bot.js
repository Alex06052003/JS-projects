const { Bot } = require("grammy");
const { botToken } = require("./config");
const connectDB = require("./database/db");
const startHandler = require("./handlers/startHandler");
const messageHandler = require("./handlers/messageHandler");

// Создание экземпляра бота
const bot = new Bot(botToken);

// Подключение к базе данных
connectDB();

// Обработчик команды /start
bot.command("start", startHandler);

// Обработчик текстовых сообщений
bot.on("message:text", messageHandler);

// Запуск бота
bot.start();
console.log("Бот запущен");
