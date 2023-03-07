const { API, VK, Keyboard, Context } = require('vk-io');
const fs = require('fs');

const fullTimeEducation = 'очная форма обучения',
    correspondenceFormOfStudy = 'заочная форма обучения',
    BaseOf11Classes = 'база 11 класов',
    BaseOf9Classes = 'база 9 класов'

const priceComands = async (context) =>{

    if (context.messagePayload.command.toLowerCase().includes(correspondenceFormOfStudy)) {
        let answer =  fs.readFileSync('text/CostOfServices/DistanceLearning/base-11.txt', 'utf8', (err, data) => {
            return answer = data
        });
        return await context.send({
            message: `${answer}`,
            
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