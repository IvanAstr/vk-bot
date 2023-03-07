const { API, VK, Keyboard } = require('vk-io');
const fs = require('fs');

const listOfDocuments = 'перечень документов',
    termsOfPremaDocuments = 'cроки према документов',
    listOfBudgetPlaces = "перечень бюджетных мест",
    listOfPaidPlaces = 'перечень платных мест',
    dormitory = 'общежитие'

const conditionComands = async (context)=>{

    if (context.messagePayload.command.toLowerCase().includes(listOfDocuments)) {
        let answer =  fs.readFileSync('text/AdmConditions/listOfDocuments.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/информация-об-условиях-приема',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'условия приема'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(termsOfPremaDocuments)) {
        let answer =  fs.readFileSync('text/AdmConditions/termsOfPremaDocuments.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/информация-об-условиях-приема',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'условия приема'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(listOfBudgetPlaces)) {
        let answer =  fs.readFileSync('text/AdmConditions/listOfBudgetPlaces.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/информация-об-условиях-приема',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'условия приема'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(listOfPaidPlaces)) {
        let answer =  fs.readFileSync('text/AdmConditions/listOfPaidPlaces.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/информация-об-условиях-приема',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'условия приема'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(dormitory)) {
        let answer =  fs.readFileSync('text/AdmConditions/dormitory.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/информация-об-условиях-приема',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'условия приема'
                },
                color: 'negative'
            })
        })
    }

}

module.exports = {conditionComands}