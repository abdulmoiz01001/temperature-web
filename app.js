
let selectTemp = document.getElementById('select-temp');
let inputTempTypes = document.getElementById('input-temp-types');
let tempInput = document.getElementById('temp-input');
let outputTempTypes = document.getElementById('output-temp-types');
let tempOutput = document.getElementById('temp-output');
let selectionHeading = document.getElementById('selection-heading');
let convertBtn = document.getElementById('convert-btn');
let toastMassage = document.getElementById('toast-msg');
let notificationToast = document.getElementById('notification-toast-id');
let notificationToastWarning = document.getElementById('notification-toast-warning-id');
let toastMassageWarning = document.getElementById('toast-msg-warning');
// make a function to set selectTemp value to inputTempTypes value
const setTemp = () => {
    toastMassageWarning.innerText = '';
    // reload window to reset the input fields
    // window.location.reload();
    // tempInput.innerText = inputTempTypes.value;
    // if( tempInput.value == null ){
    //   tempInput.value = 0;
    // }
    // convertBtn.disabled = true;
    if(inputTempTypes.value != 'celsius' && inputTempTypes.value != "fahrenheit" && inputTempTypes.value != "kelvin"){
        // alert('Select an input temperature type');
        toastMassageWarning.innerText = 'Select an input temperature type';
        notificationToastWarning.classList.add('show-warning');
        setTimeout(() => {
            notificationToastWarning.classList.remove('show-warning');
        }, 2000);
        return;
    }
    else if(outputTempTypes.value != 'celsius' && outputTempTypes.value != "fahrenheit" && outputTempTypes.value != "kelvin"){
        toastMassageWarning.innerText = 'Select an output temperature type';
        notificationToastWarning.classList.add('show-warning');
        setTimeout(() => {
            notificationToastWarning.classList.remove('show-warning');
        }, 2000);
        return;
    }
    else if(tempInput.value == ''){
        toastMassageWarning.innerText = 'Enter a temperature';
        notificationToastWarning.classList.add('show-warning');
        setTimeout(() => {
            notificationToastWarning.classList.remove('show-warning');
        }, 2000);
        return;
    }
     if (inputTempTypes.value === 'celsius' && outputTempTypes.value === 'fahrenheit') {
     celsiusToFahrenheit();
    } else if (inputTempTypes.value === 'celsius' && outputTempTypes.value === 'kelvin') {
     celsiusToKelvin();
    } else if (inputTempTypes.value === 'fahrenheit' && outputTempTypes.value === 'celsius') {
     fahrenheitToCelsius();
    } else if (inputTempTypes.value === 'fahrenheit' && outputTempTypes.value === 'kelvin') {
     fahrenheitToKelvin();
    }
    else if (inputTempTypes.value === 'kelvin' && outputTempTypes.value === 'celsius') {
     kelvinToCelsius();
    }
    else if (inputTempTypes.value === 'kelvin' && outputTempTypes.value === 'fahrenheit') {
     kelvinToFahrenheit();
    }
    convertBtn.disabled = false;
}

// inputTempTypes.addEventListener('change', ()=>{
//     setTemp();
//     console.log('change');
// });

const kelvinToFahrenheit = () => {
    selectionHeading.innerText = 'Kelvin To Fahrenheit';
    let fahrenheit = (tempInput.value - 273.15) * 9 / 5 + 32;
    tempOutput.value = fahrenheit.toFixed(2);
    notificationToast.classList.add('show');
    setTimeout(() => {
        notificationToast.classList.remove('show');
    }, 2000);
}

const kelvinToCelsius = () => {
    selectionHeading.innerText = 'Kelvin To Celsius';
    let celsius = tempInput.value - 273.15;
    tempOutput.value = celsius.toFixed(2);
    notificationToast.classList.add('show');
    setTimeout(() => {
        notificationToast.classList.remove('show');
    }, 2000);
}

const fahrenheitToKelvin = () => {
    selectionHeading.innerText = 'Fahrenheit To Kelvin';
    let kelvin = (tempInput.value - 32) * 5 / 9 + 273.15;
    tempOutput.value = kelvin.toFixed(2);
    notificationToast.classList.add('show');
    setTimeout(() => {
        notificationToast.classList.remove('show');
    }, 2000);
}

const fahrenheitToCelsius = () => {
    selectionHeading.innerText = 'Fahrenheit To Celsius';
    let celsius = (tempInput.value - 32) * 5 / 9;
    tempOutput.value = celsius.toFixed(2);
    notificationToast.classList.add('show');
    setTimeout(() => {
        notificationToast.classList.remove('show');
    }, 2000);
}

const celsiusToKelvin = () => {
    selectionHeading.innerText = 'Celsius To Kelvin';
        let kelvin = parseInt(tempInput.value) + 273.15;
        tempOutput.value = kelvin.toFixed(2);
        notificationToast.classList.add('show');
        setTimeout(() => {
            notificationToast.classList.remove('show');
        }, 2000);
}

const celsiusToFahrenheit = () => {
    selectionHeading.innerText = 'Celsius To Feherenheit';
    let fahrenheit = (tempInput.value * 9 / 5) + 32;
    tempOutput.value = fahrenheit.toFixed(2);
    // show notification show class
     notificationToast.classList.add('show');
     setTimeout(() => {
         notificationToast.classList.remove('show');
     }, 2000);

}

