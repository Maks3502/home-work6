// завдання 7
const MaxAge = 55;
let group = "";


if(MaxAge < 16 || MaxAge === 16 || MaxAge === 0  ){
        group = alert("ви дитина (0 - 16)");

}
else if(MaxAge < 17 || MaxAge < 60 || MaxAge === 17 || MaxAge === 60){
group = alert("ви доросдий 17- 60")
}
else if(MaxAge > 60 || MaxAge === 61 || MaxAge === 100 ) {
group = alert("ви пенсионер 61-100")
}

// завдання 6
let number1 = promt("ведить число яке потрапить в диапозон")
if(number1 === 51 || number1 > 55 && number1 < 99){
    number1 = promt("число потрапляє в діапозон");
}else{
    number1 = promt("Число не потрапляє в діапазон")
}

// завдання 5
let subscription;
let ballance;
if(ballance === subscription){
    ballance = 1000;
    subscription = "free"
}else if (ballance === subscription){
    ballance = 5000;
    subscription = "pro";
}
else(ballance === subscription){
    ballance = 10000;
    subscription = "vip"
}

// завдання 10
if ("0"){
    console.log("Привіт")
}


// завдання 11
 const randoms = Math.random() * (run1 - run5) + run1;
  



//  завдання 3 
const x1 = 10;
const x2 = 30;
const number = 45;
if(number < x1){
    console.log("Це число знаходиться до x1")
}
else if(number > x1){
    console.log("Це число знаходиться після x1")
}
else if(number >= x1 && number <= x2){
    console.log("Це число входить у видризок  між x1 та x2")
}
else(number <= x1 && number >= x2){
    console.log("Це число входить у видризок  між x1 та x2")
}

// завдання 2

const nameLang = "ECMAScript";
if(nameLang === ECMAScript){
    const message = alert("Правільно")
}else{
    const message = alert("Ви незнаєте ? ECMAScript!")
}
console.log(nameLang);

// завдання 1
const balance = 10000;
if(balance > 0){
    let message = 1;
    message = "Поповнений баланс"
}else{
    message = "Поповніть баланс"
}
console.log(message);