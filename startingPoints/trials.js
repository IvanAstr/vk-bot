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
        })
        .textButton({
            label: 'Дошкольное образование',
            payload:{
                command:'дошкольное образование'
            },
            color:'primary'
        })
        .row().textButton({
            label: 'Преподавание в начальных классах',
            payload: {
                command: 'Преподавание в начальных классах,',
            },
            color: 'primary'
        })
        .textButton({
            label: 'Специальное дошкольное образование',
            payload:{
                command:'Специальное дошкольное образование'
            },
            color:'primary'
        })
        .row().textButton({
            label: 'Коррекционная педагогика',
            payload: {
                command: 'Коррекционная педагогика в начальном образовании'
            },
            color: 'primary'
        })
        .textButton({
            label: 'Физическая культура',
            payload:{
                command:'Физическая культура'
            },
            color:'primary'
        })
        .row().textButton({
            label: 'Адаптивная физическая культура',
            payload: {
                command: 'Адаптивная физическая культурае'
            },
            color: 'primary'
        })
        .textButton({
            label: 'Музыкальное образование',
            payload:{
                command:'Музыкальное образование'
            },
            color:'primary'
        })
        .row().textButton({
            label: 'Изобразительное искусство и черчение',
            payload: {
                command: 'изобразительное искусство и черчение'
            },
            color: 'primary'
        })
    
        .row().textButton({
            label: 'Назад',
            payload: {
                command: 'меню'
            },
            color: 'negative'
        })
    });
}


module.exports = { trialsJS }