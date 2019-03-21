'use strict'

let monthBudget = +prompt("Ваш бюджет на месяц?", '0');

let dateInFormat = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


let appData = {
    budget : monthBudget,
    time : dateInFormat,
    expences : {},
    optionalExpences : {},
    income : [],
    savings : false
}


// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", " ");
//     let b = +prompt("Во сколько обойдется?", " ");

//     if((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null 
//     && a != " " && b != " " && a.length < 50) {
//         console.log("dnoee");
//         appData.expences[a] = b;
//     }
// }

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", " ");
//     let b = +prompt("Во сколько обойдется?", " ");

//     if((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null 
//     && a != " " && b != " " && a.length < 50) {
//         console.log("dnoee");
//         appData.expences[a] = b;
//     } 
//     i++;
// }

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " ");
    let b = +prompt("Во сколько обойдется?", " ");

    if((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null 
    && a != " " && b != " " && a.length < 50) {
        console.log("dnoee");
        appData.expences[a] = b;

    i++;
}
}
while (i < 2);


appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка"); 
} else {
    console.log("Произошла ошибка");
}

