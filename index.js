

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const botToken = '516ff9caa967e753-dd2295bc24ac206b-d624986d90a59abf';



const bot = new ViberBot({
    authToken: botToken,
    name: 'MyViberBot',
    avatar: 'https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg',
});

// Обработчик события нового сообщения
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    console.log('Message');
    // Отвечаем на каждое сообщение пользователя текстом "Привет!"
    response.send(new TextMessage('Привет!'));
});

const webhookUrl = "https://cryptic-shore-64677-904cb630fee4.herokuapp.com";





app.get('/', (req, res) => {
    res.send('Using global content security policy!');
});

app.post('/sendData', (req, res) => {
    return res.send('Hello from POST');
});

app.get('/getData', (req, res) => {
    return res.send('Hello from GET');
});

app.use("/viber/webhook", bot.middleware());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Application running on port: ${process.env.PORT}`);
  bot.setWebhook(`${webhookUrl}/viber/webhook`).catch(error => {
    console.log('Can not set webhook on following server. Is it running?');
    console.error(error);
    process.exit(1);
  });
});

