function ageClick(){
    var yourAge = prompt('Hi,what is your BIRTH-YEAR🙂 ');
    var ageInDayss = (2021 - yourAge) * 365;
    var h3 = document.getElementsByClassName('age');
    document.querySelector('.age').innerHTML=ageInDayss + '🤙🏻';
}

