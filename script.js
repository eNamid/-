let name = prompt('Ваш вік ');
alert('Ваш вік ' + name);

let prod = prompt('Введіть кількість товару');
let cost = prompt('Введіть ціну за одиницю');
let sum = prod * cost;
alert('Сума покупки: ' + sum + 'грн');

let num = prompt("Введіть число щоб визначити чи воно від'ємне");
Math.sign(num);
if (num < 0){
    alert("Число від'ємне");
}
else if (num >= 0){
    alert('Число додатне');
}
else{
    alert('Null');
}

let week = prompt('Введіть номер дня тижня');
switch (week){
    case '1':
        alert('Понеділок');
        break;
    case '2':
        alert('Вівторок');
        break;
    case '3':
        alert('Середа');
        break;
    case '4':
        alert('Четвер');
        break;
    case '5':
        alert("П'ятниця");
        break;
    case '6':
        alert('Субота');
        break;
    case '7':
        alert('Неділя');
        break;        
    default:
        alert('Некоректне число');
        break;
};

let mult;
for (let i = 1; i <= 10; i++){
    mult = i * 6;
        alert(i + ' * 6 = ' + mult);
    }

const arr = [3, -4, 6, -25, 500];
    let res = arr[2] ** 2;
    alert(res);
    res = arr[0] + arr[4];
    alert(res);
    res = arr[1] ** 2 + arr[3] ** 2;
    alert('-' + res);

let car = [
        {
            owner: "Tom",
            model: "Camaro 2017",
            volume: "6.2L"
        },
        {
            owner: "Alex",
            model: "Lanos 2003",
            volume: "1.6L"
        },
        {
            owner: "Elon Musk",
            model: "Tesla Model S",
            volume: '0L'
        }
    ]
alert(car[2].owner);
alert(car[2].model);
alert(car[2].volume);

const numMinOne = (a = 48, b = 39) => {
    if (a < b){
        return a;
    }
    else
    {
        return b;
    }
};
const numMinTwo = (c = 3, d = 120) => {
    if (c < d){
        return c;
    }
    else{
        return d;
    }
};

alert("min(a, b) = " + numMinOne());
alert("min(c, d) = " + numMinTwo());

if (numMinOne() > numMinTwo()){
    alert("max{min(a, b),min(c, d) " + numMinOne());
}
else{
    alert("max{min(a, b),min(c, d) " + numMinTwo());
};

let word = prompt('Напишіть слово');
alert('Введене слово має ' + word.length + ' символів.');
alert('Введене слово в зворотному порядку ' + '\u202E' + word);