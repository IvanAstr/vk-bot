const { API, VK, Keyboard } = require('vk-io');

const priceJS = async (context) => {
    return context.send({
        message: ("Стоимость образовательных услуг"),
        keyboard: Keyboard.builder().inline().textButton({
            label: 'Очная форма обучения ',
            payload: {
                command: 'очная форма обучения',
            },
            color: 'primary'
        }).row().textButton({
            label: 'Заочная форма обучения',
            payload: {
                command: 'заочная форма обучения',
            },
            color: 'primary'
        }).row().textButton({
            label: 'Назад',
            payload: {
                command: 'меню'
            },
            color: 'negative'
        })
    })
}

module.exports = {priceJS}