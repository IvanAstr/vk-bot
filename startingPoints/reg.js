const { API, VK, Keyboard } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const { QuestionManager } = require('vk-io-question');

const regJS = async (context) => {
    const vk = new VK({
        token: process.env.TOKEN,
        pollingGroupId: process.env.GROUP_ID
    });
    
    const questionManager = new QuestionManager();
    const hearManager = new HearManager();
    
    vk.updates.use(questionManager.middleware);
    vk.updates.on('message', hearManager.middleware);
    
    hearManager.hear('/reg', async (context) => {
        const answer = await context.question(
            'Согласны-ли Вы на обработку персональных данных?'
        );
    
        if (!/да|yes|согласен|конечно/i.test(answer.text)) {
            await context.send('Тогда, мы не можем совершить регистрацию');
            return;
        }
    
        await context.send('Отлично, тогда продолжим');
    
        const age = await context.question('Введите Ваш возраст');
        const email = await context.question('Введите Ваш имейл');
        const phone = await context.question('Введите Ваш номер телефона');
    
        await context.send(
            `Возраст: ${age.text}\nЭл. адрес: ${email.text}\nТелефон: ${phone.text}`
        );
    });
}

module.exports = {regJS}