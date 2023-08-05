

// const ViberBot = require('viber-bot').Bot;
// const BotEvents = require('viber-bot').Events;
// const TextMessage = require('viber-bot').Message.Text;
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const botToken = '516ff9caa967e753-dd2295bc24ac206b-d624986d90a59abf';



// const bot = new ViberBot({
//     authToken: botToken,
//     name: 'MyViberBot',
//     avatar: 'https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg',
// });

// // Обработчик события нового сообщения
// bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
//     console.log('Message');
//     // Отвечаем на каждое сообщение пользователя текстом "Привет!"
//     response.send(new TextMessage('Привет!'));
// });

// const webhookUrl = "https://viberbot-tmorvac3ma-uc.a.run.app";



// app.post('/webhook', bot.middleware());

app.get('/', (req, res) => {
    res.send('Using global content security policy!');
});

// app.post('/sendData', (req, res) => {
//     return res.send('Hello from POST');
// });

// app.get('/getData', (req, res) => {
//     return res.send('Hello from GET');
// });

app.listen(process.env.PORT || 3000, () => {
    console.log(`Бот слушает порт ${process.env.PORT}`);

    // // Устанавливаем вебхуки после того, как сервер запущен и прослушивает порт
    // try {
    //     bot.setWebhook(webhookUrl).catch((error) => {
    //         console.error('Ошибка установки вебхука:', error);
    //     })

    // } catch (error) {
    //     console.log(error)
    // }
});

