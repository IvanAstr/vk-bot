const { API, VK, Keyboard, Upload } = require('vk-io');
const fs = require('fs');
const api = new API({
    token: "vk1.a.z1VHCkeqKg82PP3sPT1lLu285ynu2voxnoxfdhq7VTh3K2FFovkUHvg25pk1-fGt263s5rnnLYnT3Zc3qfFXqHqPhMlBqu_WZjkOyw-OgWCK8TwyP0oE3KVZUNDNq6kCZ16QDgTlwNUtuhp_Y5t8Di6xmeBNnmtw3-FeJMhGmYIK0m3bbNWgsge6YesgFtjWIsgIal57tpgb1YMovOUcHw"
});

const upload = new Upload({
	api
});


const legalProtectionActivities = 'правохранительная деятельность',
    physicalCulture = 'физическая культура',
    adaptivePhysicalCulture = "адаптивная физическая култура",
    musicEducation = 'музыкальное образование',
    fineArtAndDrawing = 'изобразительное искусство и черчение'

const trialsComands = async (context)=>{
    if (context.messagePayload.command.toLowerCase().includes(legalProtectionActivities)) {
        let answer =  fs.readFileSync('text/Introductory/fineArtAndDrawing.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/вступительные-испытания',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'вступительные испытания'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(physicalCulture)) {
        let answer =  fs.readFileSync('text/Introductory/physicalCulture.txt', 'utf8', (err, data) => {
            return answer = data
        });
        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/вступительные-испытания',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'вступительные испытания'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(adaptivePhysicalCulture)) {
        let answer =  fs.readFileSync('text/Introductory/adaptivePhysicalCulture.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/вступительные-испытания',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'вступительные испытания'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(musicEducation)) {
        let answer =  fs.readFileSync('text/Introductory/musicEducation.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message: `${answer}`,

            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/вступительные-испытания',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'вступительные испытания'
                },
                color: 'negative'
            })
        })
    }

    else if (context.messagePayload.command.toLowerCase().includes(fineArtAndDrawing)) {
        let answer =  fs.readFileSync('text/Introductory/fineArtAndDrawing.txt', 'utf8', (err, data) => {
            return answer = data
        });

        const attachment = await upload.messagePhoto({
            source: {
                value: "img/example-still-life.png"
            }
        });

        return await context.send({
            message: `${answer}`,
            attachment,
            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/вступительные-испытания',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'вступительные испытания'
                },
                color: 'negative'
            }),

        })


        
    }

}

module.exports = {trialsComands}