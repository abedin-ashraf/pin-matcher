function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }

    else {
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        calcInput.value += number;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');

    var attempt = document.getElementById('attempt');
    var attemptValue = parseInt(attempt.innerText);
    if (attemptValue > 0) {
        attempt.innerText = attemptValue - 1;
    }

    if (pin == typedNumbers) {

        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {

        failNotification.style.display = 'block';
        successNotification.style.display = 'none';


    }

}