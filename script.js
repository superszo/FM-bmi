// function to toggle .input-box border when focus / blur

const inputOutline = function () {

    let numberInputs = document.querySelectorAll('[type="number"]');

    for (let i = 0; i < numberInputs.length; i++) { 

        numberInputs[i].addEventListener('focus', function () {
            numberInputs[i].parentElement.style.border = '1px solid #345FF6'
        })

        numberInputs[i].addEventListener('blur', function () {
            numberInputs[i].parentElement.style.border = '1px solid #D8E2E7'
        })
    }
}

inputOutline();

// switch between form variants - metric / imperial 

let radios = document.querySelectorAll('[type="radio"]');

for (i = 0; i < radios.length; i++) {

    radios[i].addEventListener('change', function () {

        if (document.getElementById('metric').checked) {

            document.getElementById('metric-form').classList.remove('hide');
            document.getElementById('imperial-form').classList.add('hide');

        } else if (document.getElementById('imperial').checked) {

            document.getElementById('metric-form').classList.add('hide');
            document.getElementById('imperial-form').classList.remove('hide');
        }
    })
}

let inputs = document.querySelectorAll('[type="number"]');


const bmiClass = function (bmi) {
    if (bmi < 18.5) {
        return 'an underweight'
    } else if ( bmi >= 18.5 && bmi < 25) {
        return 'a healthy weight'
    } else if (bmi >= 25 && bmi < 30) {
        return 'an overweight'
    } else {
        return 'an obese'
    }
}

const idealLowerM = function (height) {
    return (18.5 * Math.pow(height/100, 2)).toFixed(1)
}

const idealHigherM = function(height) {
    return (24.9 * Math.pow(height/100, 2)).toFixed(1)
}

const idealLowerI = function (height) {
    return (18.5 * Math.pow((3)))
}


//  calculate bmi on input when all inputs have value + show result

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        let heightM = document.getElementById('height-m');
        let weightM = document.getElementById('weight-m');

        let heightFt = document.getElementById('height-ft');
        let heightIn = document.getElementById('height-in');
        let weightSt = document.getElementById('weight-st');
        let weightLbs = document.getElementById('weight-lbs');

        let bmi = 0
        

        if (document.getElementById('metric-form').classList.contains('hide')) {
            if (heightFt.value && heightIn.value && weightSt.value && weightLbs.value) {
                bmi = (703 * ((Number(weightLbs.value) + (14 * Number(weightSt.value))) / Math.pow((Number(heightIn.value) + 12 * Number(heightFt.value)), 2))).toFixed(1)

                document.getElementById('bmi-result').innerHTML = bmi;
                
                document.getElementById('classification').innerHTML = bmiClass(bmi);

                document.getElementById('ideal-weigth').innerHTML = `${(18.5 * Math.pow((heightIn.value + 12 * heightFt.value)))/ 703}lbs and ${(24.9 * Math.pow((heightIn.value + 12 * heightFt.value)))/ 703}lbs`;

                document.getElementById('welcome-msg').classList.add('hide');
                document.getElementById('result').classList.remove('hide');
            } 
        } else {
            if (heightM.value && weightM.value) {
                bmi = (weightM.value / Math.pow((heightM.value / 100), 2)).toFixed(1)
                document.getElementById('bmi-result').innerHTML = bmi;
                
                document.getElementById('classification').innerHTML = bmiClass(bmi);

                document.getElementById('ideal-weigth').innerHTML = `${idealLowerM(heightM.value)}kg and ${idealHigherM(heightM.value)}kg`;

                document.getElementById('welcome-msg').classList.add('hide');
                document.getElementById('result').classList.remove('hide');
            } 
        }
    })
}






