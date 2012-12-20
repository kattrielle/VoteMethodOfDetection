/**
 * Файл с данными
 */
//Всевозможные параметры клиентов
var allParams = {
    age: 'Возраст',
    salary: 'Зарплата',
    realty: 'Недвижимость',
    credit_history: 'Кредитная история',
    registration: 'Прописка',
    conviction: 'Нет судимости',
    experience: 'Стаж работы'
}

var paramGroups = [
    ['age', 'salary', 'experience', 'registration'],
    ['realty', 'credit_history', 'conviction'],
    ['salary', 'realty', 'experience'],
    ['age', 'salary', 'conviction']
];

var clientTypes = {
    good: [
    {
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 1
    },
    {
        age: 1,
        salary: 1,
        realty: 0,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 1
    },{
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 0,
        conviction: 1,
        experience: 1
    },{
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 0,
        conviction: 1,
        experience: 0
    },{
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 0
    },{
        age: 1,
        salary: 1,
        realty: 0,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 0
    },{
        age: 1,
        salary: 1,
        realty: 0,
        credit_history: 1,
        registration: 0,
        conviction: 1,
        experience: 0
    },{
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 0
    },{
        age: 0,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 1
    }
    ],
    bad: [
    {
        age: 0,
        salary: 0,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 1
    },
    {
        age: 1,
        salary: 0,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 1
    },
    {
        age: 1,
        salary: 1,
        realty: 0,
        credit_history: 0,
        registration: 1,
        conviction: 0,
        experience: 1
    },{
        age: 1,
        salary: 1,
        realty: 0,
        credit_history: 1,
        registration: 1,
        conviction: 0,
        experience: 1
    },{
        age: 1,
        salary: 1,
        realty: 0,
        credit_history: 1,
        registration: 1,
        conviction: 0,
        experience: 0
    },{
        age: 0,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 0,
        experience: 1
    },{
        age: 0,
        salary: 1,
        realty: 0,
        credit_history: 1,
        registration: 1,
        conviction: 1,
        experience: 1
    },{
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 0,
        registration: 1,
        conviction: 1,
        experience: 1
    },{
        age: 1,
        salary: 1,
        realty: 1,
        credit_history: 1,
        registration: 1,
        conviction: 0,
        experience: 1
    }
    ]
}