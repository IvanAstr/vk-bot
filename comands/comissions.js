const { API, VK, Keyboard } = require('vk-io');
const fs = require('fs');

const scheduleRobots = 'график работы',
    theCompositionOfTheAdmissionsCommittee = 'состав приемной комиссии',
    contactDetails = 'контактные данные';

const comissionComands = async (context) => {
    //вторичные ответы с приемная комиссия -> график работы
        if (context.messagePayload.command.toLowerCase().includes(scheduleRobots)) {
            let answer =  fs.readFileSync('text/AdmCommittee/scheduleRobots.txt', 'utf8', (err, data) => {
                return answer = data
            });
            
            return await context.send({
                message: `${answer}`,
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
            let answer =  fs.readFileSync('text/AdmCommittee/commissionStructure.txt', 'utf8', (err, data) => {
                return answer = data
            });
            return await context.send({
                message: `${answer}`,
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
            let answer =  fs.readFileSync('text/AdmCommittee/contactDetails.txt', 'utf8', (err, data) => {
                return answer = data
            });
            return await context.send({
                message: `${answer}`,

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