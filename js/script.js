'use strict';

let birthYear = prompt('Введіть рік народження ');
let city = prompt('В якому місті Ви живете? ');
let sport = prompt('Який улюблений вид спорту?');
let message;
let sportMessage = '';
let cityMessage = '';
let year = 2023 - birthYear;


if (birthYear === null || city === null || sport === null){
    message = 'Шкода, що Ви не захотіли ввести  ';
    if (birthYear === null){
        alert(message + 'свій рік народження');
    } else if (city === null){
        alert(message + 'своє місто');
    }else {
        alert(message + 'свій вид спорту');
    }
} else{
    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
        switch (city) {
            case 'Київ':
                cityMessage = 'Ти живеш у столиці України';
                break;
            case 'Вашингтон':
                cityMessage = 'Ти живеш у столиці США';
                break;
            case 'Лондон':
                cityMessage = 'Ти живеш у столиці Великої Британії';
                break;
        }
    } else {
        cityMessage = 'Ти живеш у місті'  + city;
    }
    if (sport === 'Футбол' || sport === 'Баскетбол' || sport === 'Теніс') {
        switch (sport) {
            case 'Футбол':
                sportMessage = 'Круто! Хочеш стати Ліонель Мессі?';
                break;
            case 'Баскетбол':
                sportMessage = 'Круто! Хочеш стати Леброн Джеймс?';
                break;
            case 'Теніс':
                sportMessage = 'Круто! Хочеш стати Рафаель Надаль?';
                break;
        }
    } else {
        sportMessage = 'Круто! Твій улюблений вид спорту ' + sport;
    }
    alert('Твій вік ' + year + '\n' + cityMessage + '\n' + sportMessage );
}













