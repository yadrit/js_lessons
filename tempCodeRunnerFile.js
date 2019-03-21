let num = 50;
// (num == 50) ? console.log("Verno") : console.log("Vran'yo!");

switch (num) {
    case num < 49:
        console.log("Govnokod malo");
        break;
    case num > 100:
        console.log("Govnokod mnogo");
        break;
    case num > 89:
        console.log("Govnokod snova mnogo");
        break;
    case num == 50:
        console.log("Vernovato");
        break;   
}