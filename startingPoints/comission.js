const { API, VK, Keyboard } = require('vk-io');


const scheduleRobots = 'график роботы',
    theCompositionOfTheAdmissionsCommittee = 'состав приемной комиссии',
    contactDetails = 'контактные данные';
    
//Первичные ответы на основные категории 
const comisionJS = (context)=>{
    return context.send({
        message: ('Приемная комиссия'),
        keyboard: Keyboard.builder().inline().textButton({
            label: 'График работы',
            payload: {
                command: 'График работы',
                item: 'График работы \nПонедельник - пятница: 9:00 - 17:00\nСуббота: 9:00 - 13:00\nВоскресенье - выходной'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Состав приемной комиссии',
            payload: {
                command: 'состав приемной комиссии',
                item: ' секретарь'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Контактные данные',
            payload: {
                command: 'контактные данные'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Назад',
            payload: {
                command: 'меню'
            },
            color: 'negative'
        })
    });
}
module.exports = {comisionJS}