const { API, VK, Keyboard, MessageContext, Upload } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const { QuestionManager } = require('vk-io-question');
const fs = require('fs');

//------------------------------------==
// ### KeyBoards ### 
//------------------------------------==



const { comisionJS } = require('./startingPoints/comission');
const { conditionsJS } = require('./startingPoints/condition');
const { trialsJS } = require('./startingPoints/trials');
const { priceJS } = require('./startingPoints/price');


//----------------------------------------==
// ### переменные обратоки для KeyBoards ### 
//----------------------------------------==

const { comissionComands } = require('./comands/comissions.js');
const { conditionComands } = require('./comands/conditions.js');
const { trialsComands } = require('./comands/trials.js');
const { priceComands } = require("./comands/prices.js");

const vk = new VK({
    token: "vk1.a.z1VHCkeqKg82PP3sPT1lLu285ynu2voxnoxfdhq7VTh3K2FFovkUHvg25pk1-fGt263s5rnnLYnT3Zc3qfFXqHqPhMlBqu_WZjkOyw-OgWCK8TwyP0oE3KVZUNDNq6kCZ16QDgTlwNUtuhp_Y5t8Di6xmeBNnmtw3-FeJMhGmYIK0m3bbNWgsge6YesgFtjWIsgIal57tpgb1YMovOUcHw"
});

const api = new API({
    token: "vk1.a.z1VHCkeqKg82PP3sPT1lLu285ynu2voxnoxfdhq7VTh3K2FFovkUHvg25pk1-fGt263s5rnnLYnT3Zc3qfFXqHqPhMlBqu_WZjkOyw-OgWCK8TwyP0oE3KVZUNDNq6kCZ16QDgTlwNUtuhp_Y5t8Di6xmeBNnmtw3-FeJMhGmYIK0m3bbNWgsge6YesgFtjWIsgIal57tpgb1YMovOUcHw"
});

const upload = new Upload({
	api
});

//-------------------------------------==
// ### Стартовые команды для KeyBoard ### 
//-------------------------------------==
const start = 'начать',
    commission = 'приемная комиссия',
    conditions = 'условия приема',
    trials = 'вступительные испытания',
    price = 'стоимость образовательных услуг',
    menu = 'меню',
    website = 'сайт колледжа';

//------------------------------------==
// ### Команды для приемной комиссии ###
//------------------------------------==
const scheduleRobots = 'график работы',
    theCompositionOfTheAdmissionsCommittee = 'состав приемной комиссии',
    contactDetails = 'контактные данные';

//-----------------------------------==
// ### Команды для условий приема ###
//-----------------------------------==
const listOfDocuments = 'перечень документов',
    termsOfPremaDocuments = 'cроки према документов',
    listOfBudgetPlaces = "перечень бюджетных мест",
    listOfPaidPlaces = 'перечень платных мест',
    dormitory = 'общежитие'

//------------------------------------------==
// ### Команды для вступительных испытаний ###
//------------------------------------------==
const legalProtectionActivities = 'правохранительная деятельность',
    physicalCulture = 'физическая культура',
    adaptivePhysicalCulture = "адаптивная физическая култура",
    musicEducation = 'музыкальное образование',
    fineArtAndDrawing = 'изобразительное искусство и черчение'

//--------------------------------------------------==
// ### Команды для стоимости образовательных услуг ###
//--------------------------------------------------==
const fullTimeEducation = 'очная форма обучения',
    correspondenceFormOfStudy = 'заочная форма обучения',
    BaseOf11Classes = 'база 11 класов',
    BaseOf9Classes = 'база 9 класов'



//------------------------------------==
// ### Основная программа ###
//------------------------------------==
vk.updates.start().catch(console.error);
vk.updates.on('message', async (context, next) => {

    // *** Чтобы группа не отвечала на свои же сообщения ***
    if (context.isOutbox == true) return
    console.log(context.text.toLowerCase());
    
    if (context.text.toLowerCase().includes(start)) {

        await context.send({
            message: ('Добро пожаловать в бота группы!\nНажмите на кнопку что бы перейти меню для просмотра основных разделов!'),
            keyboard: Keyboard.builder().textButton({
                label: 'Главное меню',
                payload: {
                    command: 'меню'
                },
                color: 'positive'
            })
        });
    }

    //----------------------------------------------==
    // ### Основные категории (начальный KeyBoard) ###
    //----------------------------------------------==

    else if (context.messagePayload.command.toLowerCase().includes(menu)) {
        await context.send({
            message: ('Главное меню'),
            keyboard: Keyboard.builder().inline().textButton({
                label: 'Приемная комиссия',
                payload: {
                    command: 'приемная комиссия'
                },
                color: 'primary'
            }).row().textButton({
                label: 'Условия приема',
                payload: {
                    command: 'Условия приема'
                },
                color: 'primary'
            }).row().textButton({
                label: 'Вступительные испытания',
                payload: {
                    command: 'Вступительные испытания'
                },
                color: 'primary'
            }).row().textButton({
                label: 'Стоимость образовательных услуг',
                payload: {
                    command: 'Стоимость образовательных услуг'
                },
                color: 'primary'
            }).row().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/информация-об-условиях-приема',
            })
        })
    }

    //--------------------------------------==
    // ### Первый раздел Приемная комиссия ###
    //--------------------------------------==

    //* KeyBoard приемной комиссии *//

    else if (context.messagePayload.command.toLowerCase().includes(commission)) {
        await comisionJS(context)
    }

    //* Обработчики KeyBoard приемной комиссии *//

     else if (context.messagePayload.command.toLowerCase().includes(scheduleRobots)) {
        await comissionComands(context)
     }

    else if (context.messagePayload.command.toLowerCase().includes(theCompositionOfTheAdmissionsCommittee)) {
        await comissionComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(contactDetails)) {
        await comissionComands(context)
    }


    //------------------------------------==
    // ### Второй раздел Условия приема ###
    //------------------------------------==

    //* KeyBoard условия приема *//

    else if (context.messagePayload.command.toLowerCase().includes(conditions)) {
        await conditionsJS(context)
    }

    //* Обработчики KeyBoard условий приема *//

    else if (context.messagePayload.command.toLowerCase().includes(listOfDocuments)) {
        await conditionComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(termsOfPremaDocuments)) {
        await conditionComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(listOfBudgetPlaces)) {
        await conditionComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(listOfPaidPlaces)) {
        await conditionComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(dormitory)) {
        await conditionComands(context)
    }

    //--------------------------------------------==
    // ### Третий раздел Вступительные испытания ###
    //--------------------------------------------==

    //* KeyBoard вступительных испытаний *//

    else if (context.messagePayload.command.toLowerCase().includes(trials)) {
        await trialsJS(context)
    }

    //* Обработчики KeyBoard вступительных испытаний *//

    else if (context.messagePayload.command.toLowerCase().includes(legalProtectionActivities)) {
        await trialsComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(physicalCulture)) {
        await trialsComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(adaptivePhysicalCulture)) {
        await trialsComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(musicEducation)) {
        await trialsComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(fineArtAndDrawing)) {
        await trialsComands(context)
    }

    //-------------------------------------------------------==
    // ### Четвертый раздел стоимость образовательных услуг ###
    //-------------------------------------------------------==

    //* Обработчики KeyBoard стоимость образовательных услуг *//

    else if (context.messagePayload.command.toLowerCase().includes(price)) {
        await priceJS(context)
    }

    //* Обработчики KeyBoard вступительных испытаний *//

    else if (context.messagePayload.command.toLowerCase().includes(correspondenceFormOfStudy)){
        await priceComands(context)
    }

    else if (context.messagePayload.command.toLowerCase().includes(fullTimeEducation)){
        await priceComands(context)
    }
    //* Обработчики KeyBoard fullTimeEducation очное обучение *//

    else if (context.messagePayload.command.toLowerCase().includes(BaseOf9Classes)){
        let answer =  fs.readFileSync('text/CostOfServices/Full-timeEducation/base-9.txt', 'utf8', (err, data) => {
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
                    command: 'очная форма обучения'
                },
                color: 'negative'
            })
        }) 
    }

    

    else if (context.messagePayload.command.toLowerCase().includes(BaseOf11Classes)){
        let answer =  fs.readFileSync('text/CostOfServices/Full-timeEducation/base-11.txt', 'utf8', (err, data) => {
            return answer = data
        });

        return await context.send({
            message:`${answer}`,
            keyboard: Keyboard.builder().inline().urlButton({
                label: 'Официальный сайт',
                url: 'https://bgpk.edu22.info/абитуриенту/стоимость-платных-образовательных-услуг',
            }).row().textButton({
                label: 'Назад',
                payload: {
                    command: 'очная форма обучения'
                },
                color: 'negative'
            })
        }) 
    }



})

console.log('Бот работает')


