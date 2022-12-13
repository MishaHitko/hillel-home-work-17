const btn = document.querySelector('.btnSave');
const nameLastname = document.querySelector('.nameLastname');
const date = document.querySelector('.date');
const sex = document.querySelectorAll('.sex');
const city = document.querySelector('select');
const addr = document.querySelector('textarea');
const language = document.querySelectorAll('.language');

function name(obj) {
    const finishNameLastName = document.createElement('p');
    finishNameLastName.innerText = `Имя и Фамилия: ${obj.value}`;
    document.body.append(finishNameLastName);
};

function finishDate(obj) {
    const finishDat = document.createElement('p');
    finishDat.innerText = `Дата рождения: ${obj.value}`;
    document.body.append(finishDat);
};

function finishSex(array) {
    const arrArray = [...array];
    let sexValue = '';
    arrArray.forEach((value) => {
        if (value.checked) {
            sexValue = value.value;
        }
        return sexValue;
    });
    const finalSex = document.createElement('p');
    if (sexValue === 'men') {
        finalSex.innerText = 'Ваш пол: мужской';
    } else if (sexValue === 'women'){
        finalSex.innerText = 'Ваш пол: женский';
    } else {
        finalSex.innerText = 'Вы не выбрали пол';
    }
    document.body.append(finalSex);
};

function finishCity(obj) {
    const finalCity = document.createElement('p');
    finalCity.innerText = `Ваш город: ${obj.value}`;
    document.body.append(finalCity);
};

function finishAddr(obj) {
    const finalAddr = document.createElement('p');
    finalAddr.innerText = `Ваш адрес: ${obj.value}`;
    document.body.append(finalAddr);
};

function finishLanguage(array) {
    const finalLanguage = document.createElement('p');
    const arrArray = [...array];
    let languageValue = '';
    arrArray.forEach((value) => {
        if (value.checked) {
            languageValue += `${value.value}  `;
        }
        return languageValue;
    });
    finalLanguage.innerText = `Вы владеете такими языкаки как: ${languageValue}`;
    document.body.append(finalLanguage);
};

btn.addEventListener('click', () => {
    document.body.innerHTML = '';
    name(nameLastname);
    finishDate(date);
    finishSex(sex);
    finishCity(city);
    finishAddr(addr);
    finishLanguage(language);
});