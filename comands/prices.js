const { API, VK, Keyboard, Context } = require('vk-io');

const fullTimeEducation = 'очная форма обучения',
    correspondenceFormOfStudy = 'заочная форма обучения',
    BaseOf11Classes = 'база 11 класов',
    BaseOf9Classes = 'база 9 класов'

const priceComands = async (context) =>{

    if (context.messagePayload.command.toLowerCase().includes(correspondenceFormOfStudy)) {
        return await context.send({
            message:('За первый год обучения на базе 11 классов (заочная форма обучения) по специальностям:\n\n'+
            "«Правоохранительная деятельность» - 33000 рублей\n"+
            "«Дошкольное образование» - 33900 рублей\n"+
            "«Физическая культура» - 35100 рублей\n"+
            "«Преподавание в начальных классах» - 35100 рублей\n\n"+
            "Более подробнее о стоимости платных образовательных услуг вы можете узнать на сайте колледжа"
            ),
            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/стоимость-платных-образовательных-услуг',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'стоимость образовательных услуг'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(fullTimeEducation)) {
        return await context.send({
            message:('Очная форма обучения'),

            keyboard: Keyboard.builder().inline().textButton({
                label: 'База 9 класов',
                payload: {
                    command: 'база 9 класов'
                },
                color: 'primary'
            }).row().textButton({
                label: 'База 11 класов',
                payload: {
                    command: 'база 11 класов'
                },
                color: 'primary'
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'стоимость образовательных услуг'
                },
                color: 'negative'
            })
        })
    }
}
module.exports = {priceComands}