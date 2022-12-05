const { API, VK, Keyboard } = require('vk-io');

const scheduleRobots = 'график работы',
    theCompositionOfTheAdmissionsCommittee = 'состав приемной комиссии',
    contactDetails = 'контактные данные';

const comissionComands = async (context) => {
    //вторичные ответы с приемная комиссия -> график работы
        if (context.messagePayload.command.toLowerCase().includes(scheduleRobots)) {
            return await context.send({
                message: (context.messagePayload.item),

                keyboard: Keyboard.builder().inline().textButton({
                    label: 'Назад',
                    payload: {
                        command: 'приемная комиссия'
                    },
                    color: 'negative'
                })
            })
        }

        // вторичные ответы с приемная комиссия -> состав приемной комиссии
        else if (context.messagePayload.command.toLowerCase().includes(theCompositionOfTheAdmissionsCommittee)) {
            return await context.send({
                message: ('Cостав приемной комиссии\n\nПредседатель: \nСамолетов Михаил Борисович.\n\nЗаместители председателя: \nИванова Любовь Васильевна.\nЗемлякова Галина Петровна.\nРубаненко Серафима Александровна.\nКолпащикова Елена Михайловна.\nСеменихина Маргарита Леонидовна.\nПоротникова Елена Валерьевна.\n\nОтветственный секретарь: \nЛукьянова Наталия Владимировна.'),

                keyboard: Keyboard.builder().inline().textButton({
                    label: 'Назад',
                    payload: {
                        command: 'приемная комиссия'
                    },
                    color: 'negative'
                })
            })
        }
        //вторичные ответы с приемная комиссия -> контактные данные
        else if (context.messagePayload.command.toLowerCase().includes(contactDetails)) {
            return await context.send({
                message: ('Контактная информация:\n\n656010, Алтайский край, г. Барнаул\nУлица 80й гвардейской дивизии, 41, музыкальный корпус, кабинет №9 \n\nТелефоны приемной комиссии: 35-77-38 (работает только летом), 8-963-571-6914 \n\nEmail: prcom@bgpk.info'),

                keyboard: Keyboard.builder().inline().textButton({
                    label: 'Назад',
                    payload: {
                        command: 'приемная комиссия'
                    },
                    color: 'negative'
                })
            })
        }
    

}

module.exports = { comissionComands }