const nameLastname = document.querySelector('.nameLastname');
const city = document.querySelector('select');
const addr = document.querySelector('.nowaPohta');
const payment = document.querySelectorAll('.payment');
const amount = document.querySelector('.amount');
const commentary = document.querySelector('textarea');

export function name () {
    const finishNameLastName = document.createElement('p');
    finishNameLastName.innerText = `Фамилия,Имя и Отчество: ${nameLastname.value}`;
    const formInfo = document.querySelector('.form-info');
    formInfo.append(finishNameLastName);
};

export function finishCity() {
    const finalCity = document.createElement('p');
    finalCity.innerText = `Ваш город: ${city.value}`;
    const formInfo = document.querySelector('.form-info');
    formInfo.append(finalCity);
};

export function nowaPohta () {
    const finishNovaPohta = document.createElement('p');
    finishNovaPohta.innerText = `Отделение Новой Почты: ${addr.value}`;
    const formInfo = document.querySelector('.form-info');
    formInfo.append(finishNovaPohta);
};

export function finishPayment() {
    const arrArray = [...payment];
    let paymentValue = '';
    arrArray.forEach((value) => {
        if (value.checked) {
            paymentValue = value.value;
        }
        return paymentValue;
    });
    const finalSex = document.createElement('p');
    if (paymentValue === 'cash') {
        finalSex.innerText = 'Оплата наличкой';
    } else if (paymentValue === 'card'){
        finalSex.innerText = 'Оплата картой';
    } else {
        finalSex.innerText = 'Вы не выбрали спозоб оплаты';
    }
    const formInfo = document.querySelector('.form-info');
    formInfo.append(finalSex);
};

export function finalAmount () {
    const finishAmount = document.createElement('p');
    finishAmount.innerText = `Кол-во: ${amount.value} единиц`;
    const formInfo = document.querySelector('.form-info');
    formInfo.append(finishAmount);
};

export function finalCommentary () {
    const finishCommentary = document.createElement('p');
    finishCommentary.innerText = `Коментарий к заказу: ${commentary.value}`;
    const formInfo = document.querySelector('.form-info');
    formInfo.append(finishCommentary);
};

