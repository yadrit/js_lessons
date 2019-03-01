'use strict'

let monthBudget = +prompt("Ваш бюджет на месяц?", '0');

let dateInFormat = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let mainExpences = prompt("Введите обязательную статью расходов в этом месяце", 0);

let price = +prompt("Во сколько обойдется?");

let appData = {
    budget : monthBudget,
    time : dateInFormat,
    expences : { mainExpences : price },
    optionalExpences : {},
    income : [],
    savings : false
}

console.log(appData);

var availableDailyBudget = (appData.budget - appData.expences.mainExpences)/30;

console.log(availableDailyBudget);

alert("К сожалению, ващ дневной бюджет составляет " + availableDailyBudget + " в локальной валюте");

