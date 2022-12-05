const { API, VK, Keyboard } = require('vk-io');

const listOfDocuments = 'перечень документов',
    termsOfPremaDocuments = 'cроки према документов',
    listOfBudgetPlaces = "перечень бюджетных мест",
    listOfPaidPlaces = 'перечень платных мест',
    dormitory = 'общежитие'

const conditionsJS = (context) => {
    return context.send({
        message: ('Условия приема'),
        keyboard: Keyboard.builder().inline().textButton({
            label: 'Перечень документов',
            payload: {
                command: 'перечень документов',
            },
            color: 'primary'
        }).row().textButton({
            label: 'Сроки према документов',
            payload: {
                command: 'cроки према документов',
            },
            color: 'primary'
        }).row().textButton({
            label: 'Перечень бюджетных мест',
            payload: {
                command: 'перечень бюджетных мест'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Перечень платных мест',
            payload: {
                command: 'перечень платных мест'
            },
            color: 'primary'
        }).row().textButton({
            label: 'Общежитие',
            payload: {
                command: 'общежитие'
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

module.exports = { conditionsJS }