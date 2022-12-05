const { API, VK, Keyboard } = require('vk-io');

const trialsJS = async (context) => {
    return context.send({
        message: ('Вступительные испытания'),
        keyboard: Keyboard.builder().inline().textButton({
            label: 'Правохранительная деятельность',
            payload: {
                command: 'правохранительная деятельность',
            },
            color: 'primary'
        }).row().textButton({
            label: 'Физическая культура',
            payload: {
                command: 'физическая культура',
            },
            color: 'primary'
        }).row().textButton({
            label: 'Адаптивная физическая култура',
            payload: {
                command: 'адаптивная физическая култура'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Музыкальное образование',
            payload: {
                command: 'музыкальное образование'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Изобразительное искусство и черчение',
            payload: {
                command: 'изобразительное искусство и черчение'
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

module.exports = { trialsJS }